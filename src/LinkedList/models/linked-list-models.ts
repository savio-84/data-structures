export class Node {
  element: any;
  next: Node | undefined;

  constructor(element: any) {
    this.element = element;
    this.next = undefined
  }
}