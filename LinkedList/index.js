var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.head = null;
    }
    //Metodo para agregar un elemento al final de la lista:
    LinkedList.prototype.add = function (value) {
        var newNode = new ListNode(value);
        if (!this.head)
            this.head = newNode;
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    };
    //Metodo para remover elemento al final de la lista:
    LinkedList.prototype.remove = function () {
        var _a;
        var current = this.head;
        if (!this.head)
            return "No hay elementos que borrar 'length: ".concat(this.length, "'");
        if (current && !current.next)
            this.head = null;
        else
            while ((_a = current === null || current === void 0 ? void 0 : current.next) === null || _a === void 0 ? void 0 : _a.next) {
                current = current.next;
            }
        if (current === null || current === void 0 ? void 0 : current.next)
            current.next = null;
    };
    //Metodo que busca un numero introducido y lo retorna si lo encuentra o también puede resivir una función CB que al devolver true sobre algún elemento de la lista lo retorna.
    LinkedList.prototype.search = function (parameter) {
        if (!this.head)
            return 'La lista está vacía, no hay ningún elemento para buscar.';
        var current = this.head;
        while (current) {
            if (typeof parameter === 'function') {
                if (parameter(current.data))
                    return Number(current.data);
            }
            else if (current.data === Number(parameter)) {
                return current.data;
            }
            if (current.next)
                current = current.next;
            else
                break;
        }
        console.log('No se encontraron coincidencias en la búsqueda');
        return;
    };
    //Metodo que ordena la lista de menor a mayor si se le pasa como argumento un string '-' o de mayor a menor si se me pasa un '+':
    LinkedList.prototype.order = function (value) {
        if (!this.head || !this.head.next)
            return 'No se puede ordenar una lista vacía o que solo tiene un elemento';
        var current = this.head;
        var arr = [];
        while (current) {
            arr.push(Number(current.data));
            current = current.next;
        }
        var sort = value === '-' ? arr.sort(function (a, b) { return a - b; }) : arr.sort(function (a, b) { return b - a; });
        this.head = null;
        for (var i = 0; i < sort.length; i++) {
            this.add(sort[i]);
        }
    };
    //Metodo que solo retorna la longitud de la lista
    LinkedList.prototype.length = function () {
        if (!this.head)
            return 0;
        var current = this.head;
        var length = 0;
        while (current) {
            length++;
            current = current.next;
        }
        return length;
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
