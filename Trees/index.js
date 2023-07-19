class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) return (this.root = newNode);
    let currentNode = this.root;
    while (true) {
      if (newNode.value > currentNode.value) {
        if (!currentNode.right) return (currentNode.right = newNode);
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) return (currentNode.left = newNode);
        currentNode = currentNode.left;
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;
    if (value === this.root.value) return true;
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) return true;
      if (value > currentNode.value) currentNode = currentNode.right;
      else currentNode = currentNode.left;
    }
    return false;
  }
  remove(value) {}
}

const myBST = new BST();

myBST.insert(9);
myBST.insert(4);
myBST.insert(6);
myBST.insert(20);
myBST.insert(170);
myBST.insert(15);
myBST.insert(1);

// console.log(myBST.lookup(9));
// console.log(myBST.lookup(3));
// console.log(myBST.lookup(15));
// console.log(myBST.lookup(8));
// console.log(myBST.lookup(20));
// console.log(myBST.lookup(21));
// console.log(myBST.lookup(170));
