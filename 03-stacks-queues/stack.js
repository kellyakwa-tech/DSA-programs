class stack {
    constructor() {
        this.items = [];
    }
    push(value) {
        this.items.push(value)
    }
    pop() {
     return this.items.pop();

}
peek() {
  return this.items[this.items.length - 1]
}
}
let myStack = new stack();
myStack.push(5);
 myStack.push(10);
 myStack.push(15);

console.log(myStack.pop());
console.log(myStack.items);
console.log(myStack.peek());