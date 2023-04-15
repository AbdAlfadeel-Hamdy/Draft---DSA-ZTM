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

  insert(index, value) {
    // Out of range index
    if (index >= this.length) return this.append(value);
    const newNode = new Node(value);
    const targetNode = this.traverse(index);
    newNode.next = targetNode.next;
    targetNode.next = newNode;
    if (index === 0) this.head = newNode;
    this.length++;
    return this;
  }

  traverse(index) {
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      if (counter === index - 1) {
        return currentNode;
      }
      currentNode = currentNode.next;
      counter++;
    }
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

console.log(myLinkedList.printList());
