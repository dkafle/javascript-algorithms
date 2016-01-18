var Node = function (value) {
    this.data = value;
    this.next = null;
};

var LinkedList = function () {
    this.head = null;
    this.count = 0;

    this.addNode = function (value) {
        if (this.count === 0) { this.head = new Node(value); } 
        else {
            var current = this.head;
            while (current.next) { current = current.next; }
            
            current.next = new Node(value);
        }
        this.count++;
    };

    this.print = function () {
        var current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    };

}

var lst = new LinkedList();
lst.addNode(5);
lst.addNode(4);
lst.addNode(9);
lst.addNode(6);

lst.print();


