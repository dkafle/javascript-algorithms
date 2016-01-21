var Node = function (data) {
  this.data = data;
  this.next = null;
};

var List = function () {
  var head = null;
  var count = 0;

  var addNode = function (data) {
    var node = new Node(data);

    if (this.count === 0) { this.head = node; }
    else {
      var runner = this.head;
      while (runner.next) {
        runner = runner.next;
      }
      runner.next = node;
    }
    this.count++;
  }

  var deleteNode = function (position) {
    var isInvalidPosition = position < 1 || position > this.count;
    if (isInvalidPosition) { return; }
    else if (position === 1) {
      this.head = this.head.next;
    }
    else {
      var current = this.head;
      var pointer = 2;
      while (pointer < position) {
        current = current.next;
        pointer++;
      }
      current.next = current.next.next;
    }
    this.count--;
  }

  var removeDuplicates = function () {
    var current = this.head;
    
    while (current) {
      var runner = current.next;
      var runnerBak = current;
      while(runner) {
        if (current.data === runner.data) {
          runnerBak.next = runner.next;
        }
        runnerBak = runner;
        runner = runner.next;
      }
    }
  };

  var print = function () {
    var start = this.head;
    while (start) {
      console.log(start.data);
      start = start.next;
    }
  }

  return {
    head: head,
    count: count,
    addNode: addNode,
    deleteNode: deleteNode,
    removeDuplicates: removeDuplicates,
    print: print
  }
};

var list = new List();
list.addNode(5);
list.addNode(3);
list.addNode(5);
list.addNode(4);
list.addNode(5)
list.addNode(9);
list.addNode(3);
list.addNode(6);
list.print();
console.log('------------------');
//list.deleteNode(6);
list.removeDuplicates();
list.print();

