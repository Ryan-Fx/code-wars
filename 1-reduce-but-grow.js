// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

// **** X-REDUCE******

// penjumlahan (membutuhkan initial value)
const sumMix = (x) => x.reduce((a, b) => a + b);

// perkalian (tidak membutuhkan initial value)
const grow = (x) => x.reduce((a, b) => a * b);

console.log(grow([1, 2, 3]));
console.log(sumMix([1, 2, 3, 4]));
