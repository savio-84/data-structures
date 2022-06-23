import { defaultEquals } from '../util';
import { Node } from './models/linked-list-models';

export class LinkedList {
  count: number;
  private head: Node | undefined;
  equalsFn: any;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  // Adiciona um novo elemento no final da lista
  push(element: any) {
    const node = new Node(element);
    let current: Node;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  // Insere um novo elemento em uma posicao especifica da lista
  insert(element: any, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index == 0) { // adiciona na primeira posicao
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous?.next;
        node.next = current;
        previous!.next = node;
      }
      this.count++; // atualiza o tamanho da lista
      return true;
    }
    return false;
  }

  // Devolve o elemento que esta em uma posicao especifica da lista. Se o elemento nao estiver na lista sera retornado undefined 
  getElementAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  // remove um elemento da lista
  remove(element: any) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  // Devolve o indice do elemento na lista. Se o elemento nao estiver na lista, -1 sera devolvido
  indexOf(element: any) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  // Remove um item de uma posicao especifica da lista.
  removeAt(index: number) {
    // verifica valores fora do intervalo
    if (index >= 0 && index < this.count) {
      let current = this.head;
      //remove o primeiro item
      if (index === 0) {
        this.head = current?.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous!.next;

        // faz a ligacao do previous com o next do current: pula esse elemento para remove-lo
      }
      this.count--;
      return current?.element;
    }
  }

  // Devolve true se a lista estiver vazia, e false se o tamanho da lista for maior que 0
  isEmpty() { return this.size() === 0 }

  // Devolve o numero de elementos da lista.
  size() {
    return this.count;
  }

  // Devolve uma representacao em string da lista ligada.
  toString() {
    if (this.head === null) {
      return '';
    }
    let objString = `${this.head?.element}`;
    let current = this.head?.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString; 
  }

  getHead() {
    return this.head;
  }

}