"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackArray = void 0;
class StackArray {
    constructor() {
        this.items = [];
    }
    // Adiciona um novo elemento
    push(element) {
        this.items.push(element);
    }
    ;
    // Remove um elemento do topo da pilha e retorna ele
    pop() {
        return this.items.pop();
    }
    ;
    // Retorna o elemento que esta no topo da pilha
    peek() {
        return this.items[this.items.length - 1];
    }
    ;
    // Retorna true se a pilhar nao conter nenhum elemento
    isEmpty() {
        return this.items.length === 0;
    }
    ;
    // Remove todos os elementos da pilha;
    clear() {
        this.items = [];
    }
    // Retorna o tamanho da pilha
    size() {
        return this.items.length;
    }
}
exports.StackArray = StackArray;
