class Queue {
    constructor() {
        this.items = [];
    }
        enqueue(value) {
           this.items.push(value); 
}
        dequeue(value) {
          return this.items.shift(value); 
}
        front() {
    return this.items[0];
}
    }

 let myQueue = new Queue();
 myQueue.enqueue(5);
 myQueue.enqueue(10);
 myQueue.enqueue(15);

console.log(myQueue.front());
console.log(myQueue.dequeue()); 
console.log(myQueue.items);
