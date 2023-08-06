import fetch from 'base/fetch';
import {Disposable, IDisposable} from '@/shared/disposable';
import {Session} from './Session';

export class SessionManager extends Disposable implements IDisposable {
  static _instance: Nullable<SessionManager> = null;
  static instance: () => Promise<SessionManager> = async function() {
    if (!SessionManager._instance) {
      const {content} = await fetch<Array<ISession>>('/session/sessionList?count=10', {
        method: 'get',
      });
  
      SessionManager._instance = new SessionManager(content);
    }
    
    return SessionManager._instance;
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
