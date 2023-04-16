class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const result = [];
    let node = this.head;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    return result;
  }

  traverse(index) {
    if (index === 0) return this.head;
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      if (counter === index) return currentNode;
      currentNode = currentNode.next;
      counter++;
    }
  }

  insert(index, value) {
    // Out of range OR insert to the end
    if (index >= this.length) return this.append(value);
    // Insert to the beginning
    if (index === 0) return this.prepend(value);
    // Regular insertion
    const newNode = new Node(value);
    const targetNode = this.traverse(index - 1);
    newNode.next = targetNode.next;
    targetNode.next = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    const targetNode = this.traverse(index - 1);
    targetNode.next = targetNode.next.next;
    this.length--;
  }
  reverse() {
    let currentNode = this.head;
    let prevNextNode = this.head.next;
    while (prevNextNode) {
      const targetNode = prevNextNode;
      prevNextNode = targetNode.next;
      targetNode.next = currentNode;
      currentNode = targetNode;
    }
    [this.head, this.tail] = [this.tail, this.head];
    this.tail.next = null;
  }
}

const myLinkedList = new LinkedList(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.prepend(2);
myLinkedList.prepend(1);
myLinkedList.reverse();
console.log(myLinkedList.printList());

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor(value) {
//     this.head = new Node(value);
//     this.tail = this.head;
//     this.length = 1;
//   }

//   append(value) {
//     const newNode = new Node(value);
//     this.tail.next = newNode;
//     newNode.prev = this.tail;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }

//   prepend(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head.prev = newNode;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }

//   printList() {
//     const result = [];
//     let node = this.head;
//     while (node) {
//       result.push(node.value);
//       node = node.next;
//     }
//     return result;
//   }

//   traverse(index) {
//     if (index === 0) return this.head;
//     let currentNode = this.head;
//     let counter = 0;
//     while (currentNode) {
//       if (counter === index) return currentNode;
//       currentNode = currentNode.next;
//       counter++;
//     }
//   }

//   insert(index, value) {
//     // Out of range OR insert to the end
//     if (index >= this.length) return this.append(value);
//     // Insert to the beginning
//     if (index === 0) return this.prepend(value);
//     // Regular insertion
//     const newNode = new Node(value);
//     const targetNode = this.traverse(index - 1);
//     newNode.next = targetNode.next;
//     newNode.prev = targetNode;
//     targetNode.next.prev = newNode;
//     targetNode.next = newNode;
//     this.length++;
//     return this;
//   }

//   remove(index) {
//     if (index === this.length - 1) {
//       this.tail = this.tail.prev;
//       this.length--;
//       return (this.tail.next = null);
//     }
//     const targetNode = this.traverse(index - 1);
//     targetNode.next.next.prev = targetNode;
//     targetNode.next = targetNode.next.next;
//     this.length--;
//   }
// }

// const myDoublyLinkedList = new DoublyLinkedList(3);

// myDoublyLinkedList.append(4);
// myDoublyLinkedList.append(5);
// myDoublyLinkedList.insert(1, 7);
// myDoublyLinkedList.remove(2);
// myDoublyLinkedList.remove(2);

// console.log(myDoublyLinkedList.printList());
// console.log(myDoublyLinkedList);
