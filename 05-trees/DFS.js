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



function dfs(node) {
    if (node === null) {
        return;
    }

    console.log(node.value);

    dfs(node.left);
    dfs(node.right);
}
dfs(root);