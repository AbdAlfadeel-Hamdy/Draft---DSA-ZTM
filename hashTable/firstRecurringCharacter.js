// const firstRecurringCharacter = (arr) => {
//   const charMap = {};
//   for (const el of arr) {
//     charMap[el] = charMap[el] + 1 || 1;
//     if (charMap[el] === 2) return el;
//   }
// };

// Solution (2)
const firstRecurringCharacter = (arr) => {
  const charMap = {};
  for (const el of arr) {
    if (charMap[el]) return el;
    charMap[el] = 1;
  }
};

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const arr3 = [2, 3, 4, 5];
const arr4 = [2, 5, 5, 2, 3, 5, 1, 2, 4];

console.log(firstRecurringCharacter(arr1));
console.log(firstRecurringCharacter(arr2));
console.log(firstRecurringCharacter(arr3));
console.log(firstRecurringCharacter(arr4));
