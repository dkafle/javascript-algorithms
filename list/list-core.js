var list = require('./list');

list.addNode = function (value) {
    var node = new list.Node(value);
    var lst = new list.List();

    if (lst.count === 0) { lst.head = node; }
    else {
        lst.next = node;
    }
};


list.addNode();
