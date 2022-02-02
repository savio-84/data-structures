export class Deque {
  count: number;
  lowestCount: number;
  items: any;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // Adiciona um elemento no inicio do deque
  addFront(element: any) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++
      this.lowestCount = 0;
      this.items[this.lowestCount] = element;
    }
  }

  // Adiciona um elemento ao final do deque
  addBack(element: any) { }

  // Remove um elemento do inicio do deque
  removeFront() { }

  // Remove um elemento do final do deque
  removeBack() { }

  // Retorna o primeiro elemento do deque
  peekFront() { }

  // Retorna o ultimo elemento do deque
  peekBack() { }

  isEmpty(): boolean {
    if ((this.count - this.lowestCount) === 0) {
      this.lowestCount = 0;
      this.count = 0;
      this.items = {};
      return true
    }

    return false;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  size() {
    return this.count - this.lowestCount;
  }

  toString() {
    if (this.isEmpty()) return '';
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString;
  }
}