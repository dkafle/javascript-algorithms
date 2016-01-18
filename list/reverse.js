var Node = function (data) {
    this.data = data;
    this.next = null;
}

var List = function () {
    this.head = null;
    this.count = 0;
}

List.prototype.addNode = function (value) {
    var current = this.head;
    var newNode = new Node(value);

    if (!current) { this.head = newNode; }
    else {
        while (current.next) { current = current.next; }
        
        current.next = newNode;
    }
    this.count++;
}

List.prototype.print = function () {
    var current = this.head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

List.prototype.reverse = function () {
    if (this.count === 1) return;

    var curr = this.head;
    var prev = null;
    var next = curr.next;

    while (current) {
        var tmp = next.next;
        prev = current;
        current = next;
        next = temp;
    }

    this.head = current;
}

var lst = new List();
lst.addNode(5);
lst.addNode(7);
lst.addNode(4);

lst.print();


