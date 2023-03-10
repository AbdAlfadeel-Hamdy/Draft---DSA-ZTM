// const nemo = ["nemo"];
// const everyOne = ["nemo", "adham", "hossam", "aly", "gonzalo"];
// const large = new Array(10000).fill("nemo");

// const findNemo = (arr) => {
//   const t0 = performance.now();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "nemo") {
//       console.log("Found Nemo!");
//     }
//   }
//   const t1 = performance.now();
//   console.log(`Found nemo in ${t1 - t0} ms!`);
// };

// findNemo(large);

// const printFirstItemThenFirstHalfThenSayHi100Times = (items) => {
//   console.log(items[0]);

//   const mid = Math.floor(items.length / 2);
//   console.log(mid);

//   for (let i = 0; i < mid; i++) {
//     console.log(items[i]);
//   }

//   let i = 0;
//   while (i < 10) {
//     console.log("Hi");
//     i++;
//   }
// };

// printFirstItemThenFirstHalfThenSayHi100Times(["nemo", "hoss", "adham", "gonz"]);

///// Log all pairs of an array
// const logAllPairs = (arr) =>
//   arr.forEach((el1) => arr.forEach((el2) => console.log(el1, el2)));

// logAllPairs([1, 2, 3, 4]);
