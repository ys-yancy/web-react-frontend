import {Disposable, IDisposable} from '@/shared/disposable';
// import {Lazy} from '@/shared/lazy';

export class Session extends Disposable implements IDisposable {
  constructor(private readonly _session: ISession) {
    super();
  }

  public accessor(name: keyof ISession): ISession[keyof ISession]  {
    return this._session[name];
  }
}
