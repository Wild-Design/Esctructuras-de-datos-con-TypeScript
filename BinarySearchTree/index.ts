type NodeValue = string | number;

class BinarySearchTree {
  value: NodeValue = 0;
  left: BinarySearchTree | null = null;
  right: BinarySearchTree | null = null;

  constructor(value: NodeValue) {
    this.value = value;
  }

  insert(value: NodeValue = 0) {
    let newTree = new BinarySearchTree(value);
    if (value <= this.value) {
      if (!this.left) {
        this.left = newTree;
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = newTree;
      } else {
        this.right.insert(value);
      }
    }
  }
}
