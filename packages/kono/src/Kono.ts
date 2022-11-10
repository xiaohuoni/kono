import { EventEmitter } from 'events';

class Kono<T> {
  private emitter: EventEmitter;
  private nodes: any;
  private pathname: string = '/';
  constructor() {
    this.emitter = new EventEmitter();
  }
}

export { Kono };
