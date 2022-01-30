"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
// ts-disable
class Stack {
    constructor() {
        this._count = 0;
        this._items = {};
    }
    // Adiciona um elemento no topo da pilha
    push(element) {
        this._items[this._count] = element;
        this._count++;
    }
    // Remove um elemento do topo da pilha e retorna ele
    pop() {
        if (!this.isEmpty())
            return undefined;
        this._count--;
        const result = this._items[this._count];
        delete this._items[this._count];
        return result;
    }
    // Retorna o tamanho da stack
    size() {
        return this._count;
    }
    // Veririca se a stack esta vazia
    isEmpty() {
        return this._count === 0;
    }
    // Retorna o elemento no topo da pilha sem remove-lo
    peek() {
        if (this.isEmpty())
            return undefined;
        return this._items[this._count - 1];
    }
    // Remove todos os elementos da pilha
    clear() {
        this._count = 0;
        this._items = {};
    }
    // Retorna os elementos da pilha em forma de string
    toString() {
        if (this.isEmpty())
            return undefined;
        let objString = `${this._items[0]}`;
        for (let i = 1; i < this._count; i++) {
            objString = `${objString},${this._items[i]}`;
        }
        return objString;
    }
}
exports.Stack = Stack;
