var Node = function (value) {
    this.data = value;
    this.next = null;
};

var List = function () {
    this.head = null;
    this.count = 0;
};

module.exports = {
    Node: Node,
    List: List
};

