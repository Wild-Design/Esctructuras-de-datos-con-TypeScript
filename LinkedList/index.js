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
    LinkedList.prototype.remove = function () {
        var _a;
        var current = this.head;
        if (!this.head) {
            console.log("No hay elementos que borrar 'length: ".concat(this.length, "'"));
            return;
        }
        if (current && !current.next) {
            this.head = null;
        }
        else {
            while ((_a = current === null || current === void 0 ? void 0 : current.next) === null || _a === void 0 ? void 0 : _a.next) {
                current = current.next;
            }
            if (current === null || current === void 0 ? void 0 : current.next) {
                current.next = null;
            }
        }
        this.length--;
    };
    LinkedList.prototype.search = function (parameter) {
        if (!this.head) {
            console.log('La lista está vacía, no hay ningún elemento para buscar.');
            return;
        }
        var current = this.head;
        if (typeof parameter === 'function') {
            if (parameter(current.data)) {
                return Number(current.data);
            }
        }
        else if (current.data === parameter) {
            return current.data;
        }
        while (current.next) {
            if (typeof parameter === 'function') {
                if (parameter(current.next.data)) {
                    return Number(current.next.data);
                }
            }
            else if (current.next.data === Number(parameter)) {
                return current.next.data;
            }
            current = current.next;
        }
        console.log('No se encontraron coincidencias en la búsqueda');
        return;
    };
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
