var Node = function (value) {
    this.data = value;
    this.next = null;
};

var LinkedList = function () {
    this.head = null;
    this.count = 0;

    this.addNode = function (value) {
        if (this.count === 0) {
            this.head = new Node(value);
        } else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }

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

    this.deleteNode = function (position) {
        var isEmpty = this.count === 0;
        var isOutOfBound = this.count < position;
        if (isEmpty || isOutOfBound) {
            return -1;
        }

        if (position === 0) {
            this.removeHead();
            return;
        }
        var currentNode = this.head;
        var p = 1;
        while(currentNode && p < position - 1) {
            currentNode = currentNode.next;
            p++;
        }
        var removedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
        console.log('Removed ' + position + ' node. Value is: ', removedNode.data);
        this.count--;
    }

    this.removeHead = function () {
        var removedNode = this.head;
        this.head = this.head.next;
        this.count--;
        console.log('Removed head item: ', removedNode.data);
    }
}

var list = new LinkedList();
list.addNode(7);
list.addNode(3);
list.addNode(14);
list.addNode(7);
list.addNode(15);
list.addNode(33);
list.addNode(16);
list.addNode(6);
list.addNode(13);
list.addNode(2);
list.addNode(4);

list.print();
list.deleteNode(0);
list.print();

/*
list.deleteNode(3);
list.print();
list.deleteNode(7);
list.print();
list.deleteNode(2);
list.print();
*/
