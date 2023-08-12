import fetch from 'base/fetch';
import {Disposable, IDisposable} from '@/shared/disposable';
import {Session} from './Session';

export default class SessionService extends Disposable implements IDisposable {
  static id = 'SessionService';

  static _instance: Nullable<SessionService> = null;
  static instance: () => Promise<SessionService> = async function() {
    if (!SessionService._instance) {
      const {content} = await fetch<Array<ISession>>('/session/sessionList?count=10', {
        method: 'get',
      });

      SessionService._instance = new SessionService(content);
    }
    
    return SessionService._instance;
  }


  #sessionList: Set<Session> = new Set();

  get sessionList(): Set<Session> {
    return this.#sessionList;
  }

  constructor(private _sessionList: ISession[]) {
    super();
    this.steup();
  }

  private steup(): void {
    this.format();
  }

  private format(): void {
    this._sessionList.forEach((session) => {
      this.#sessionList.add(new Session(session));
    })
  }
}
