function sumArray(array) {
  return array === null || array.length <= 2
    ? 0
    : array
        .sort((a, b) => a - b) // sort number from lowest to highest
        .slice(1, -1) // remove lowest and highest number
        .reduce((a, b) => a + b);
}

console.log(sumArray([6, 2, 1, 8, 10]));
