import { Node } from './linked-list-models';

export class DoublyNode extends Node {
  element: any;
  next: DoublyNode | undefined;
  prev: DoublyNode | undefined;
  constructor(element: any, next: DoublyNode | undefined, prev: DoublyNode | undefined) {
    super(element);
    this.prev = prev;
    this.next = next;
  }
}