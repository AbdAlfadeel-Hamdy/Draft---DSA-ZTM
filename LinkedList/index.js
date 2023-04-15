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
}

const myLinkedList = new LinkedList(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.prepend(2);
myLinkedList.prepend(1);
myLinkedList.insert(1, 11);
myLinkedList.insert(2, 22);
myLinkedList.insert(3, 33);
myLinkedList.insert(4, 300);
myLinkedList.insert(10, 300);
myLinkedList.insert(0, 19);
myLinkedList.insert(12, 70);
myLinkedList.remove(11);
myLinkedList.remove(10);
myLinkedList.remove(1);

console.log(myLinkedList.printList());
