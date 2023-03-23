class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) this.data[address] = [];
    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    if (this.data[address]) {
      const bucket = this.data[address].find((bucket) => bucket[0] === key);
      return bucket ? bucket[1] : undefined;
    }
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 1000);
myHashTable.set("apples", 200);
myHashTable.set("banana", 3);
console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("banana"));
console.log(myHashTable.get("apples"));
console.log(myHashTable.get("oranges"));
