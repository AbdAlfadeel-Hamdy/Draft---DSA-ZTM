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
  BFSIterative() {
    if (!this.root) return [];
    const queue = [this.root];
    const list = [];
    while (queue.length > 0) {
      const removedNode = queue.shift();
      list.push(removedNode.value);
      if (removedNode.left) queue.push(removedNode.left);
      if (removedNode.right) queue.push(removedNode.right);
    }
    return list;
  }
  BFSRecursive(queue, list) {
    if (!this.root || queue.length === 0) return list;
    const removedNode = queue.shift();
    list.push(removedNode.value);
    if (removedNode.left) queue.push(removedNode.left);
    if (removedNode.right) queue.push(removedNode.right);
    return this.BFSRecursive(queue, list);
  }
  DFSPreOrderIterative() {
    if (!this.root) return;
    const queue = [this.root];
    const list = [];
    while (queue.length > 0) {
      const removedNode = queue.shift();
      if (removedNode.right) queue.unshift(removedNode.right);
      if (removedNode.left) queue.unshift(removedNode.left);
      list.push(removedNode.value);
    }
    return list;
  }
  DFSPreOrder(node, list) {
    list.push(node.value);
    if (node.left) this.DFSPreOrder(node.left, list);
    if (node.right) this.DFSPreOrder(node.right, list);
    return list;
  }
  DFSInOrder(node, list) {
    if (node.left) this.DFSInOrder(node.left, list);
    list.push(node.value);
    if (node.right) this.DFSInOrder(node.right, list);
    return list;
  }
  DFSPostOrder(node, list) {
    if (node.left) this.DFSPostOrder(node.left, list);
    if (node.right) this.DFSPostOrder(node.right, list);
    list.push(node.value);
    return list;
  }
}

const myBST = new BST();

myBST.insert(9);
myBST.insert(4);
myBST.insert(6);
myBST.insert(20);
myBST.insert(170);
myBST.insert(15);
myBST.insert(1);

// console.log(myBST.BFSIterative());
// console.log(myBST.BFSRecursive([myBST.root], []));
console.log("####################");
console.log(myBST.DFSPreOrderIterative());
console.log(myBST.DFSPreOrder(myBST.root, []));
console.log(myBST.DFSInOrder(myBST.root, []));
console.log(myBST.DFSPostOrder(myBST.root, []));
