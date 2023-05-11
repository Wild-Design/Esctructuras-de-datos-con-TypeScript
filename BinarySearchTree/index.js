var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(value) {
        this.left = null;
        this.right = null;
        this.value = value;
        if (typeof value !== 'number' && typeof value !== 'string')
            throw Error("¡Se esperaba un argumento de tipo 'number' o 'string' en la instancia 'BinarySearchTree!");
    }
    BinarySearchTree.prototype.insert = function (value) {
        var newTree = new BinarySearchTree(value);
        if (value <= this.value) {
            if (!this.left)
                this.left = newTree;
            else
                this.left.insert(value);
        }
        else {
            if (!this.right)
                this.right = newTree;
            else
                this.right.insert(value);
        }
    };
    BinarySearchTree.prototype.size = function () {
        if (this.left && !this.right)
            return 1 + this.left.size();
        if (this.right && !this.left)
            return 1 + this.right.size();
        if (this.left && this.right)
            return 1 + this.left.size() + this.right.size();
        return 1;
    };
    BinarySearchTree.prototype.search = function (value) {
        if (value === this.value)
            return true;
        if (value <= this.value && this.left)
            return this.left.search(value);
        if (value > this.value && this.right)
            return this.right.search(value);
        return false;
    };
    BinarySearchTree.prototype.searchMinValue = function () {
        return !this.left ? this.value : this.left.searchMinValue();
        /*Teniendo en cuenta que el valor minimo estará siempre en la izquierda, pence en esto:
          Si no hay nada a la izquierda entonces retorno el unico valor y si hay algo a la izquierda entonces llamo al metodo en la izquierda
           hasta que ya no halla nada en ninguna izquierda*/
    };
    BinarySearchTree.prototype.searchMaxValue = function () {
        //Aquí uso la mísma lógica que el metodo para buscar el menor valor solo que buscando siempre a la derecha.
        return !this.right ? this.value : this.right.searchMaxValue();
    };
    return BinarySearchTree;
}());
