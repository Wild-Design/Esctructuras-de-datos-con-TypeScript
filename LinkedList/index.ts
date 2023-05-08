class LinkedList {
  private head: ListNode | null = null;
  private length: number = 0;

  constructor() {
    this.head = null;
  }

  public add(value: number): void {
    const newNode: ListNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current: ListNode = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  public remove(): void {
    let current: ListNode | null = this.head;
    if (!this.head) {
      console.log(`No hay elementos que borrar 'length: ${this.length}'`);
      return;
    }

    if (current && !current.next) {
      this.head = null;
    } else {
      while (current?.next?.next) {
        current = current.next;
      }
      if (current?.next) {
        current.next = null;
      }
    }
    this.length--;
  }

  public search(
    parameter: number | ((number: number | null) => boolean)
  ): number | undefined {
    if (!this.head) {
      console.log('La lista está vacía, no hay ningún elemento para buscar.');
      return;
    }
    let current = this.head;
    if (typeof parameter === 'function') {
      if (parameter(current.data)) {
        return Number(current.data);
      }
    } else if (current.data === parameter) {
      return current.data;
    }

    while (current.next) {
      if (typeof parameter === 'function') {
        if (parameter(current.next.data)) {
          return Number(current.next.data);
        }
      } else if (current.next.data === Number(parameter)) {
        return current.next.data;
      }
      current = current.next;
    }

    console.log('No se encontraron coincidencias en la búsqueda');
    return;
  }
}

class ListNode {
  public data: number | null = null;
  public next: ListNode | null = null;

  constructor(value: number) {
    this.data = value;
    this.next = null;
  }
}
