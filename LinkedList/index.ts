class LinkedList {
  private head: ListNode | null = null;

  constructor() {
    this.head = null;
  }

  //Metodo para agregar un elemento al final de la lista:
  public add(value: number): void {
    const newNode: ListNode = new ListNode(value);
    if (!this.head) this.head = newNode;
    else {
      let current: ListNode = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  //Metodo para remover elemento al final de la lista:
  public remove(): string | void {
    let current: ListNode | null = this.head;
    if (!this.head)
      return `No hay elementos que borrar 'length: ${this.length}'`;

    if (current && !current.next) this.head = null;
    else
      while (current?.next?.next) {
        current = current.next;
      }
    if (current?.next) current.next = null;
  }

  //Metodo que busca un numero introducido y lo retorna si lo encuentra o también puede resivir una función CB que al devolver true sobre algún elemento de la lista lo retorna.
  public search(
    parameter: number | ((number: number | null) => boolean)
  ): number | string | void {
    if (!this.head)
      return 'La lista está vacía, no hay ningún elemento para buscar.';
    let current = this.head;
    while (current) {
      if (typeof parameter === 'function') {
        if (parameter(current.data)) return Number(current.data);
      } else if (current.data === Number(parameter)) {
        return current.data;
      }
      if (current.next) current = current.next;
      else break;
    }

    console.log('No se encontraron coincidencias en la búsqueda');
    return;
  }

  //Metodo que ordena la lista de menor a mayor si se le pasa como argumento un string '-' o de mayor a menor si se me pasa un '+':
  public order(value: '-' | '+'): string | void {
    if (!this.head || !this.head.next)
      return 'No se puede ordenar una lista vacía o que solo tiene un elemento';
    let current: ListNode | null = this.head;
    let arr: number[] = [];
    while (current) {
      arr.push(Number(current.data));
      current = current.next;
    }
    const sort =
      value === '-' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
    this.head = null;
    for (let i: number = 0; i < sort.length; i++) {
      this.add(sort[i]);
    }
  }

  //Metodo que solo retorna la longitud de la lista
  length(): number {
    if (!this.head) return 0;
    let current: ListNode | null = this.head;
    let length: number = 0;
    while (current) {
      length++;
      current = current.next;
    }
    return length;
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
