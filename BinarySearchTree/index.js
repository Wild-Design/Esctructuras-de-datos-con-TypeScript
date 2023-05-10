var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(value) {
        this.value = 0;
        this.left = null;
        this.right = null;
        this.value = value;
    }
    BinarySearchTree.prototype.insert = function (value) {
        if (value === void 0) { value = 0; }
        var newTree = new BinarySearchTree(value);
        if (value <= this.value) {
            if (!this.left) {
                this.left = newTree;
            }
            else {
                this.left.insert(value);
            }
        }
        else {
            if (!this.right) {
                this.right = newTree;
            }
            else {
                this.right.insert(value);
            }
        }
    };
    return BinarySearchTree;
}());
