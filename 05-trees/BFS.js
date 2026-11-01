//tree
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


//BFS part
function bfs(root) {
    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();

        console.log(current.value);

        if (current.left !== null) {
            queue.push(current.left);
        }

        if (current.right !== null) {
            queue.push(current.right);
        }
    }
}
bfs(root);