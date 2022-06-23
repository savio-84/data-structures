import { defaultEquals } from '../util';
import { LinkedList } from './LinkedList';
import { DoublyNode } from './models/DoublyNode';
import { Node } from './models/linked-list-models';

export class DoublyLinkedList extends LinkedList {
  private tail: DoublyNode | undefined;
  private head: DoublyNode | undefined;
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
    this.head = undefined;
  }
  insert(element: any, index: number): boolean {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element, undefined, undefined);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) { // NOVO
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current!.prev = node;
          this.head = node;
        }
      } else if (index === this.count) { // ultimo item - NOVO
        current = this.tail;
        current!.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous!.next;
        node.next = current;
        previous!.next = node;
        current!.prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }

  getHead(): Node | undefined {
    return this.head;
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current!.next;
        // se houver apenas um item, atualizamos tail tambem;
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head!.prev = undefined;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current!.prev;
        this.tail!.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current!.prev;
        // faz a ligacao de previous com o next de current - pula esse elemento para remove-lo
        previous!.next = current!.next;
        current!.next!.prev = previous;
      }
      this.count--;
      return current!.element;
    }
    return undefined;
  }

  getElementAt(index: number): DoublyNode | undefined {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }
}