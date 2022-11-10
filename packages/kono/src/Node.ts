import { EventEmitter } from 'events';

interface NodeProps {
  emitter: EventEmitter;
}

class Node {
  private emitter: EventEmitter;
  constructor({ emitter }: NodeProps) {
    this.emitter = emitter;
  }
}

export { Node };
