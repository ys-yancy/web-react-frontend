import fetch from 'base/fetch';
import {Disposable, IDisposable} from '@/shared/disposable';

class ReadyEvent<T extends {success: boolean}> implements IDisposable {

  constructor(
    private executor: (event: CustomEvent<T>) => any
  ) {
    // init
    this.init();

    // @ts-ignore
    window.addEventListener('app.ready', this.executor);
  }

  async init() {
    const {content} = await fetch('/user/userInfo', {
      method: 'get',
    });

    const event = new CustomEvent('app.ready', {
      detail: {
        success: true,
      }
    });

    window.dispatchEvent(event);
  }

  public dispose(): void {
    // @ts-ignore
    window.removeEventListener('app.ready', this.executor);
  }
}

export default class InstantiationService extends Disposable implements IDisposable {
  static id = 'InstantiationService';

  ready(executor: () => void) {
    this._register(new ReadyEvent(({detail}) => {
      if (detail.success) {
        executor();
      }
    }));
  }
}