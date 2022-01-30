// ts-disable
export class Stack {
  private _count: number;
  private _items: any;

  constructor() {
    this._count = 0;
    this._items = {};
  }

  // Adiciona um elemento no topo da pilha
  public push(element: any) {
    this._items[this._count] = element;
    this._count++;
  }

  // Remove um elemento do topo da pilha e retorna ele
  public pop(): any | undefined {
    if (!this.isEmpty()) return undefined;
    this._count--;
    const result = this._items[this._count];
    delete this._items[this._count];
    return result;
  }

  // Retorna o tamanho da stack
  public size(): number {
    return this._count;
  }

  // Veririca se a stack esta vazia
  public isEmpty(): boolean {
    return this._count === 0;
  }

  // Retorna o elemento no topo da pilha sem remove-lo
  public peek(): any | undefined {
    if (this.isEmpty()) return undefined;
    return this._items[this._count - 1];
  }

  // Remove todos os elementos da pilha
  public clear(): void {
    this._count = 0;
    this._items = {};
  }

  // Retorna os elementos da pilha em forma de string
  public toString(): string | undefined {
    if (this.isEmpty()) return undefined;
    let objString = `${this._items[0]}`;
    for (let i = 1; i < this._count; i++) {
      objString = `${objString},${this._items[i]}`;
    }
    return objString
  }
}