

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);

root.left.left = new Node(40);
root.left.right = new Node(50);

console.log(root.value);
console.log(root.left.value);
console.log(root.right.value);
console.log(root.left.left.value);
console.log(root.left.right.value);