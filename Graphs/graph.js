const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "D"],
    D: ["B", "C"]
};
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
}
}
const myGraph = new Graph();

myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");

console.log(myGraph.adjacencyList);

console.log(myGraph.adjacencyList);

console.log(graph);
console.log(graph["A"]);
console.log(graph["B"]);