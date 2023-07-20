const factorialRecursive = (num) => {
  if (num < 2) return 1;
  return num * factorialRecursive(num - 1);
};

const factorialIterative = (num) => {
  if (num < 2) return 1;
  let answer = 1;
  for (let i = 2; i <= num; i++) answer *= i;
  return answer;
};

const fibonacciRecursive = (num) => {
  if (num === 0) return 0;
  if (num < 3) return 1;
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
};
const fibonacciIterativeOne = (num) => {
  if (num === 0) return 0;
  if (num < 3) return 1;
  let prev = 1;
  let next = 1;
  let old = 1;
  for (let i = 3; i <= num; i++) {
    old = next;
    next = prev + next;
    prev = old;
  }
  return next;
};
const fibonacciIterativeTwo = (num) => {
  const arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[num];
};

console.log(factorialRecursive(5));
console.log(factorialIterative(5));
console.log(fibonacciRecursive(8));
console.log(fibonacciIterativeOne(8));
console.log(fibonacciIterativeTwo(5``));
