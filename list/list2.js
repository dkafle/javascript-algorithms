var Node = function (data) {
    this.data = data;
    this.next = null;
}

var List = function () {
    this.length = 0;
    this.head = null;
};

List.prototype.addNode = function (value) {
    var node = new Node(value);
    var current = this.head;

    if (!current) {
        this.head = node;
        this.length++;
        return;
    }

    while (current.next) { current = current.next; }

    current.next = node;
    this.length++;
}

List.prototype.print = function () {
    var current = this.head;

    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

var lst = new List();
lst.addNode(5);
lst.addNode(4);
lst.addNode(3);
lst.addNode(2);
lst.addNode(1);
lst.addNode(0);
lst.addNode(7);

lst.print();

