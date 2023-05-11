type NodeValue = string | number;

class BinarySearchTree {
  private value: NodeValue;
  private left: BinarySearchTree | null = null;
  private right: BinarySearchTree | null = null;

  constructor(value: NodeValue) {
    this.value = value;
    if (typeof value !== 'number' && typeof value !== 'string')
      throw Error(
        "¡Se esperaba un argumento de tipo 'number' o 'string' en la instancia 'BinarySearchTree!"
      );
  }

  public insert(value: NodeValue) {
    let newTree = new BinarySearchTree(value);
    if (value <= this.value) {
      if (!this.left) this.left = newTree;
      else this.left.insert(value);
    } else {
      if (!this.right) this.right = newTree;
      else this.right.insert(value);
    }
  }

  public size(): number {
    if (this.left && !this.right) return 1 + this.left.size();
    if (this.right && !this.left) return 1 + this.right.size();
    if (this.left && this.right)
      return 1 + this.left.size() + this.right.size();
    return 1;
  }

  public search(value: NodeValue): boolean {
    if (value === this.value) return true;
    if (value <= this.value && this.left) return this.left.search(value);
    if (value > this.value && this.right) return this.right.search(value);
    return false;
  }

  public searchMinValue(): NodeValue {
    return !this.left ? this.value : this.left.searchMinValue();
    /*Teniendo en cuenta que el valor minimo estará siempre en la izquierda, pence en esto:
      Si no hay nada a la izquierda entonces retorno el unico valor y si hay algo a la izquierda entonces llamo al metodo en la izquierda
       hasta que ya no halla nada en ninguna izquierda*/
  }
  public searchMaxValue(): NodeValue {
    //Aquí uso la mísma lógica que el metodo para buscar el menor valor solo que buscando siempre a la derecha.
    return !this.right ? this.value : this.right.searchMaxValue();
  }
}
