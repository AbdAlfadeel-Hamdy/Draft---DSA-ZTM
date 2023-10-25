const memoizeAddTo = (addTo) => {
  const cache = {};
  return (n) => {
    if (n in cache) return cache[n];
    else {
      console.log("Long time...");
      cache[n] = n + addTo;
      return cache[n];
    }
  };
};

const addTo80 = memoizeAddTo(80);
// console.log(addTo80(5));
// console.log(addTo80(5));
// console.log(addTo80(6));

let times = 0;
let timesOptimized = 0;

const fibonacci = (n) => {
  if (n < 2) return n;
  times++;
  return fibonacci(n - 2) + fibonacci(n - 1);
};

const memoizedFibonacci = () => {
  const cache = {};
  return function memoizedFib(n) {
    if (cache[n]) return cache[n];
    if (n < 2) return n;
    timesOptimized++;
    cache[n] = memoizedFib(n - 2) + memoizedFib(n - 1);
    return cache[n];
  };
};

const memoizedFib = memoizedFibonacci();

const fibonacciBottomUpApproach = (n) => {
  const result = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    result.push(result[i] + result[i + 1]);
  }
  return result[n];
};

console.log(fibonacci(30));
console.log(memoizedFib(30));
console.log(times);
console.log(timesOptimized);

console.log(fibonacciBottomUpApproach(30));
