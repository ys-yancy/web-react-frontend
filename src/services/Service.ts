import InstantiationService from './InstantiationService';
import SessionService from './SessionService';

type ServiceIdentifier = string | symbol;

interface ServicesAccessor {
  get<T>(id: ServiceIdentifier) : T;
}

class ServiceCollection {

  #collection = new Map<ServiceIdentifier, any>();

  public set<T>(identifier: ServiceIdentifier, instance: T) {
    this.#collection.set(identifier, instance);
  }

  public get<T>(identifier: ServiceIdentifier) : T {
    return this.#collection.get(identifier);
  }

  public has(identifier: ServiceIdentifier) : boolean {
    return this.#collection.has(identifier);
  }
}

export class AppService {
  constructor(
    private _services = new ServiceCollection()
  ) {
    // empty
  }

  invoke<T, TS extends any[] = []>(fn: (accessor: ServicesAccessor, ...args: TS) => T, ...args: TS) {
    let _done = false;
    try {
      const accessor: ServicesAccessor = {
        get: <T>(id: ServiceIdentifier) => {
          if (_done) {
            throw new Error('service invoked');
          }

          const instance = this._services.get<T>(id);

          return instance;
        }
      };

      return fn(accessor, ...args);
    } finally {
      _done = true;
    }
  }
}

export default (function service() {
  const serviceCollection = new ServiceCollection();
  
  serviceCollection.set(InstantiationService.id, new InstantiationService());

  // SessionService.instance().then((instance) => {
  //   serviceCollection.set(SessionService.id, instance);
  // });

  const _service = new AppService(serviceCollection);

  return _service;
})();
