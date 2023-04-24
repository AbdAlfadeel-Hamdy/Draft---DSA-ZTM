class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  // Using LinkedLists

  // constructor() {
  // this.top = null;
  // this.bottom = null;
  // this.length = 0;
  // }
  // peek() {
  //   return this.top;
  // }

  // Solution 1 "Adding to the tail"
  // push(value) {
  //   const newNode = new Node(value);
  //   if (this.length === 0) this.top = this.bottom = newNode;
  //   else {
  //     this.top.next = newNode;
  //     this.top = newNode;
  //   }
  //   this.length++;
  //   return this;
  // }
  // pop() {
  //   if (!this.top) return null;
  //   const removedNode = this.top;
  //   let target = this.bottom;
  //   for (let i = 0; i < this.length - 2; i++) {
  //     target = target.next;
  //   }
  //   target.next = null;
  //   this.top = target;
  //   this.length--;
  //   return removedNode;
  // }

  // Solution 2 "Adding to the head"
  // push(value) {
  //   const newNode = new Node(value);
  //   if (this.length === 0) this.top = this.bottom = newNode;
  //   else {
  //     const lastTopNode = this.top;
  //     this.top = newNode;
  //     this.top.next = lastTopNode;
  //   }
  //   this.length++;
  //   return this;
  // }
  // pop() {
  //   if (!this.top) return null;
  //   const removedNode = this.top;
  //   this.top = this.top.next;
  //   this.length--;
  //   if (this.length === 0) this.bottom = null;
  //   return removedNode;
  // }

  // Using Arrays
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    return this.array.pop();
  }
}

const myStack = new Stack();

myStack.push("google");
myStack.push("udemy");
myStack.push("discord");

// console.log(myStack.bottom);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack);
