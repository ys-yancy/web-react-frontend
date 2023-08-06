/**
 * lifecycle
 */
import {once} from '@/base/functional';
import {Iterable} from './iterator';

/**
 * An object that performs a cleanup operation when `.dispose()` is called.
 *
 * Some examples of how disposables are used:
 *
 * - An event listener that removes itself when `.dispose()` is called.
 * - A resource such as a file system watcher that cleans up the resource when `.dispose()` is called.
 * - The return value from registering a provider. When `.dispose()` is called, the provider is unregistered.
 */
export interface IDisposable {
  dispose(): void;
}

/**
 * Check if `thing` is {@link IDisposable disposable}.
 */
export function isDisposable<T extends object>(thing: T): thing is T & IDisposable {
  return typeof (<IDisposable>thing).dispose === 'function' && (<IDisposable>thing).dispose.length === 0;
}



/**
 * Disposes of the value(s) passed in.
 */
export function dispose<T extends IDisposable>(disposable: T): T;
export function dispose<T extends IDisposable>(disposable: T | undefined): T | undefined;
export function dispose<T extends IDisposable, A extends Iterable<T> = Iterable<T>>(disposables: A): A;
export function dispose<T extends IDisposable>(disposables: Array<T>): Array<T>;
export function dispose<T extends IDisposable>(disposables: ReadonlyArray<T>): ReadonlyArray<T>;
export function dispose<T extends IDisposable>(arg: T | Iterable<T> | undefined): any {
  if (Iterable.is(arg)) {
    const errors: any[] = [];
    for (const d of arg) {
      if (d) {
        try {
          d.dispose();
        } catch (error) {
          errors.push(error);
        }
      }
      if (errors.length === 1) {
        throw errors[0];
      } else if (errors.length > 1) {
        throw new AggregateError(errors, 'Encountered errors while disposing of store');
      }

      return Array.isArray(arg) ? [] : arg;
    }

  } else if (arg) {
    arg.dispose();
    return arg;
  }
}

export function disposeIfDisposable<T extends  IDisposable | object>(disposables: Array<T>): Array<T> {
  for (const d of disposables) {
		if (isDisposable(d)) {
			d.dispose();
		}
	}
	return [];
}

/**
 * Turn a function that implements dispose into an {@link IDisposable}.
 *
 * @param fn Clean up function, guaranteed to be called only **once**.
 */
export function toDisposable(fn: () => void): IDisposable {
  const self = {
    dispose: once(() => {
      fn();
    })
  };

  return self;
}

/**
 * Combine multiple disposable values into a single {@link IDisposable}.
 */
export function combinedDisposable(...disposables: IDisposable[]): IDisposable {
  const parent = toDisposable(() => dispose(disposables));
  return parent;
}

/**
 * Manages a collection of disposable values.
 *
 * This is the preferred way to manage multiple disposables. A `DisposableStore` is safer to work with than an
 * `IDisposable[]` as it considers edge cases, such as registering the same value multiple times or adding an item to a
 * store that has already been disposed of.
 */
export class DisposableStore implements IDisposable {
  static DISABLE_DISPOSED_WARNING = false;

	private _isDisposed = false;
	private readonly _toDispose = new Set<IDisposable>();

	public dispose(): void {
		if (this._isDisposed) {
			return;
		}

		this._isDisposed = true;
		this.clear();
	}

  /**
	 * @return `true` if this object has been disposed of.
	 */
	public get isDisposed(): boolean {
		return this._isDisposed;
	}

  /**
	 * Dispose of all registered disposables but do not mark this object as disposed.
	 */
	public clear(): void {
		if (this._toDispose.size === 0) {
			return;
		}

		try {
			dispose(this._toDispose);
		} finally {
			this._toDispose.clear();
		}
	}

  /**
	 * Add a new {@link IDisposable disposable} to the collection.
	 */
	public add<T extends IDisposable>(o: T): T {
		if (!o) {
			return o;
		}
		if ((o as unknown as DisposableStore) === this) {
			throw new Error('Cannot register a disposable on itself!');
		}

		if (this._isDisposed) {
			if (!DisposableStore.DISABLE_DISPOSED_WARNING) {
				console.warn('DisposableStore.DISABLE_DISPOSED_WARNING');
			}
		} else {
			this._toDispose.add(o);
		}

		return o;
	}
}

/**
 * Abstract base class for a {@link IDisposable disposable} object.
 *
 * Subclasses can {@linkcode _register} disposables that will be automatically cleaned up when this object is disposed of.
 */
export abstract class Disposable implements IDisposable {
  static readonly None = Object.freeze<IDisposable>({ dispose() { } });

  protected readonly _store = new DisposableStore();

  public dispose(): void {

		this._store.dispose();
	}

  /**
	 * Adds `o` to the collection of disposables managed by this object.
	 */
	protected _register<T extends IDisposable>(o: T): T {
		if ((o as unknown as Disposable) === this) {
			throw new Error('Cannot register a disposable on itself!');
		}
		return this._store.add(o);
	}
}

/**
 * A safe disposable can be `unset` so that a leaked reference (listener)
 * can be cut-off.
 */
export class SafeDisposable implements IDisposable {

	dispose: () => void = () => { };
	unset: () => void = () => { };
	isset: () => boolean = () => false;

	set(fn: Function) {
		let callback: Function | undefined = fn;
		this.unset = () => callback = undefined;
		this.isset = () => callback !== undefined;
		this.dispose = () => {
			if (callback) {
				callback();
				callback = undefined;
			}
		};
		return this;
	}
}