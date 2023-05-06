var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.length = 0;
        this.head = null;
    }
    LinkedList.prototype.add = function (value) {
        var newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    };
    LinkedList.prototype.remove = function () { };
    return LinkedList;
}());
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.data = null;
        this.next = null;
        this.data = value;
        this.next = null;
    }
    return ListNode;
}());
var list = new LinkedList();
list.add(5);
list.add(8);
list.add(45);
list.add(30);
console.log(list);
