class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
    class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
      let newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
        return;
      }
      let current = this.head;
    }
}

let first = new Node(10);
let second = new Node(20);
let third = new Node(30);

first.next = second;
second.next = third;

console.log(first.value);
console.log(first.next.value);
console.log(first.next.next.value);
console.log(first.next.next.next);

/*node.next = SecondNode;
SecondNode.next = thirdNode;
let current = node;

while (current !== null) {
    console.log(current.value);

    current = current.next;
}

console.log(node);
console.log(node.Next); */