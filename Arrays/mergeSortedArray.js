// Solution (1)
// const mergeSortedArrays = (arr1, arr2) =>
//   [...arr1, ...arr2].sort((a, b) => a - b);

// Solution (2)
const mergeSortedArrays = (arr1, arr2) => {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  const mergedArray = [];
  let arrOneItem = arr1[0];
  let arrTwoItem = arr2[0];
  let i = 0;
  let j = 0;
  while (arrOneItem || arrTwoItem) {
    if (!arrTwoItem || arrOneItem <= arrTwoItem) {
      mergedArray.push(arrOneItem);
      i++;
      arrOneItem = arr1[i];
      // if (!arrOneItem) return [...mergedArray, ...arr2.slice(j)];
    } else {
      mergedArray.push(arrTwoItem);
      j++;
      arrTwoItem = arr2[j];
      // if (!arrTwoItem) return [...mergedArray, ...arr1.slice(i)];
    }
  }
  return mergedArray;
};

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
