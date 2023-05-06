class LinkedList {
  head: ListNode | null = null;
  length: number = 0;

  constructor() {
    this.head = null;
  }

  add(value: number): void {
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

  remove(): void {}
}

class ListNode {
  data: number | null = null;
  next: ListNode | null = null;

  constructor(value: number) {
    this.data = value;
    this.next = null;
  }
}

const list = new LinkedList();

list.add(5);
list.add(8);
list.add(45);
list.add(30);

console.log(list);
