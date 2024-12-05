const angka = [1, 3, -6, 4, 4, 5, 9, -7, -8, 7, 3];

// filter
const filteredAngka = angka.filter((a) => a > 3);

console.log(filteredAngka);

// map
const newAngka = angka.map((a) => a * 2);
console.log(newAngka);

// reduce
const a = angka.reduce((a, b) => a + b);
console.log(a);

// chaining method
const hasil = angka
  .filter((a) => a > 3)
  .map((a) => a + 2)
  .reduce((a, b) => a + b);

console.log(hasil);

// split = return boolean
// split = return new Array
function fake(angka) {
  return angka.split("").map((a) => a + 1);
}

console.log(fake("4443443"));
