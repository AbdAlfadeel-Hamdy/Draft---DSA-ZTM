const commonItemsFound = (arrOne, arrTwo) => {
  for (const elOne of arrOne) {
    if (arrTwo.includes(elOne)) {
      return true;
    }
  }
  return false;
};

const commonItemsFound2 = (arrOne, arrTwo) => {
  const obj = {};
  for (const el of arrOne) {
    // obj[el] = obj[el] + 1 || 1;
    obj[el] = true;
  }
  for (const el of arrTwo) {
    if (obj[el]) return true;
  }
  return false;
};

console.log(commonItemsFound(["a", "b", "c", "x"], ["z", "y", "i"]));
console.log(commonItemsFound(["a", "b", "c", "x"], ["z", "y", "x"]));
console.log(commonItemsFound2(["a", "b", "c", "x"], ["z", "y", "i"]));
console.log(commonItemsFound2(["a", "b", "c", "x"], ["z", "y", "x"]));
