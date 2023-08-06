export class Lazy<T> {

	private _didRun: boolean = false;
	private _error: Error | undefined;
	private _value?: T;

	constructor(
		private readonly executor: () => T,
	) { }

	/**
	 * True if the lazy value has been resolved.
	 */
	get hasValue() { return this._didRun; }

	/**
	 * Get the wrapped value.
	 *
	 * This will force evaluation of the lazy value if it has not been resolved yet. Lazy values are only
	 * resolved once. `getValue` will re-throw exceptions that are hit while resolving the value
	 */
	get value(): T {
		if (!this._didRun) {
			try {
				this._value = this.executor();
			} catch (err) {
				this._error = err as Error;
			} finally {
				this._didRun = true;
			}
		}
		if (this._error) {
			throw this._error;
		}
		return this._value!;
	}

	/**
	 * Get the wrapped value without forcing evaluation.
	 */
	get rawValue(): T | undefined { return this._value; }
}