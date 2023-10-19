const bubbleSort = (data) => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i; j++) {
      const prevIndex = data[j];
      const nextIndex = data[j + 1];
      if (prevIndex > nextIndex) {
        data[j] = nextIndex;
        data[j + 1] = prevIndex;
      }
    }
  }
  return data;
};
const selectionSort = (data) => {
  for (let i = 0; i < data.length; i++) {
    let smallest = data[i];
    let smallestIndex = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < smallest) {
        smallest = data[j];
        smallestIndex = j;
      }
    }
    temp = data[i];
    data[i] = smallest;
    data[smallestIndex] = temp;
  }
  return data;
};

// SOLUTION ONE
// const insertionSort = (data) => {
//   for (let i = 1; i < data.length; i++) {
//     let temp = data[i];
//     for (let j = 0; j < i; j++) {
//       if (temp < data[j]) {
//         data = [...data.slice(0, j), temp, ...data.slice(j)];
//         data = data.slice(0, i + 1).concat(data.slice(i + 2));
//         break;
//       }
//     }
//   }
//   return data;
// };

// SOLUTION TWO
const insertionSort = (data) => {
  for (let i = 1; i < data.length; i++) {
    for (let j = i; j > 0; j--) {
      if (data[j] >= data[j - 1]) break;
      else {
        let temp = data[j];
        data[j] = data[j - 1];
        data[j - 1] = temp;
      }
    }
  }
  return data;
};

const mergeSort = (data) => {
  if (data.length === 1) return data;
  const midPoint = Math.floor(data.length / 2);

  return merge(
    mergeSort(data.slice(0, midPoint)),
    mergeSort(data.slice(midPoint))
  );
};

const merge = (left, right) => {
  const newArr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (true) {
    if (left[leftIndex] < right[rightIndex]) {
      newArr.push(left[leftIndex]);
      leftIndex++;
      if (leftIndex === left.length) {
        newArr.push(...right.slice(rightIndex));
        return newArr;
      }
    } else {
      newArr.push(right[rightIndex]);
      rightIndex++;
      if (rightIndex === right.length) {
        newArr.push(...left.slice(leftIndex));
        return newArr;
      }
    }
  }
};

const arr = [4, 1, 5, 3, 24, 20, 2, 15];

console.log(bubbleSort(arr));
console.log(selectionSort(arr));
console.log(insertionSort(arr));
console.log(mergeSort(arr));
