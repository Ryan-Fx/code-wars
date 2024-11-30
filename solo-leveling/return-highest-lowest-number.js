function highAndLow(numbers) {
  const arrNumbers = numbers.split("").map(Number);
  console.log(arrNumbers);

  // mencari nilai angka tertinggi / terendah dalam array
  let max = Math.max(...arrNumbers);
  let min = Math.min(...arrNumbers);

  return `Highest number is ${max} and Lowest number is ${min}`;
}

console.log(highAndLow("1234568 "));
