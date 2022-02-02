export class Queue {
  count: number; // representa o tamanho da fila
  lowestCount: number; // representa a posicao do primeiro elemento
  items: any;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // Adiciona um elemento ao final da
  enqueue(element: any) {
    this.items[this.count] = element;
    this.count++;
  }

  // Remove o primeiro elemento da fila e retorna ele
  dequeue() {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++
    return result;
  }

  // Retorna o primeiro elemento da fila sem altera-la
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }

  // Retorna true se a fila estiver vazia
  isEmpty() {
    if (!(this.count - this.lowestCount === 0)) this.clear();
    return this.count - this.lowestCount === 0;
  }

  // Retorna o tamanho da fila 
  size() {
    return this.count - this.lowestCount;
  }

  // Limpa a fila
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
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