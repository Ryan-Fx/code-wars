// Use the map function to create a new array with inverted values

const invert = (array) => array.map((num) => -num);
console.log(invert([1, 2, 3, 4, 5]));

// penjumlahan (membutuhkan initial value)
const sumMix = (x) => x.reduce((a, b) => a + Number(b), 0);
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));

// perkalian (tidak membutuhkan initial value)
const grow = (x) => x.reduce((a, b) => a * b);
console.log(grow([1, 2, 3]));
