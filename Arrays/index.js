class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    return this.length++;
  }
  pop() {
    // (1)
    // if (this.length === 0) return;
    // this.length--;
    // this.data[this.length] = undefined;
    // return this.data[this.length - 1];

    // (2)
    const lastItem = this.data[this.length - 1];
    if (!lastItem) return;
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    if (index >= this.length) return;
    const deletedItem = this.data[index];
    this.shiftItems(index);
    return deletedItem;
  }
  shiftItems(index) {
    delete this.data[index];
    this.length--;
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
      delete this.data[i + 1];
    }
  }
}

const newArray = new MyArray();
newArray.push("Hi");
newArray.push("There");
newArray.push("I");
newArray.push("am");
newArray.push("Gonzalo");

console.log(newArray);
newArray.delete(2);
newArray.delete(0);
console.log(newArray);
