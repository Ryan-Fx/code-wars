// make positive number become negative number.
const makeNegative = (num) => (num > 0 ? -num : num);
console.log(makeNegative(42));

// ---------------------------------------------------------------------------------------------

// jika bilangan genap (even), kalikan dengan 8, jika ganjil (odd), kalikan dengan 9

// cara 1 : declaration function
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}
console.log(simpleMultiplication(2));

// cara 2 : arrow function
const simpleMultiplication2 = (number) =>
  number % 2 === 0 ? number * 8 : number * 9;
console.log(simpleMultiplication2(3));

// ---------------------------------------------------------------------------------------------

// buat kalkulator sederhana
// cara 1 :
function basicOp(value1, operation, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "Invalid operation";
  }
}

console.log(basicOp(10, "+", 5));

// cara 2 :
// The eval function is used to dynamically evaluate the expression formed by concatenating a, o, and b.
function basicOp2(o, a, b) {
  return eval(a + o + b);
}

console.log(basicOp2("+", 10, 5));

// ---------------------------------------------------------------------------------------------

// fake binary.
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(str) {
  return str
    .split("")
    .map((x) => (Number(x) < 5 ? "0" : "1"))
    .join("");
}

console.log(fakeBin("4538553335566"));
