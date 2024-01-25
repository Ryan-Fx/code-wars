// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

// var countSheep = function (num) {
//   let murmur = "";
//   for (let i = 1; i <= num; i++) {
//     murmur += i + " sheep...";
//   }
//   return murmur;
// };

// const squareSum = (numbers) => {
//   // Use map to square each number
//   const squaredNumbers = numbers.map((num) => {
//     return num * num;
//   });

//   // Use reduce to sum the squared values
//   const sum = squaredNumbers.reduce((acc, val) => {
//     return acc + val;
//   }, 0);

//   return sum;
// };

// const stringToNumber = function (str) {
//   // put your code here
//   return parseInt(str, 10);
// };

// function rentalCarCost(d) {
//   const dailyRate = 40;
//   let totalCost = d * dailyRate; // Calculate total cost without any discounts

//   // Apply discounts based on the number of days rented
//   if (d >= 7) {
//     totalCost -= 50; // $50 off for 7 or more days
//   } else if (d >= 3) {
//     totalCost -= 20; // $20 off for 3 or more days
//   }

//   return totalCost;
// }

// function sumMix(x) {
//   let totalSum = 0;

//   for (let i = 0; i < x.length; i++) {
//     // Convert each element to a number (if it's a string)
//     totalSum = totalSum + parseInt(x[i], 10);
//   }

//   return totalSum;
// }

const sumMix = (x) => x.reduce((a, b) => a + Number(b), 0);

console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
