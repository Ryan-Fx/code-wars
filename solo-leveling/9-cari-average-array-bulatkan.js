// Math.floor() adalah fungsi yang digunakan untuk membulatkan angka ke bawah ke bilangan bulat terdekat.

// Math.ceil() adalah fungsi yang digunakan untuk membulatkan angka ke atas ke bilangan bulat terdekat.

// Math.round() adalah fungsi yang digunakan untuk membulatkan angka ke bilangan bulat terdekat

function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}

console.log(getAverage([1, 2, 3, 4, 5])); // 3

// find() adalah fungsi yang digunakan untuk mencari elemen pertama dalam array yang memenuhi kondisi yang diberikan. Jika tidak ada elemen yang memenuhi kondisi, maka fungsi ini akan mengembalikan nilai undefined.

// find() object
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const user = users.find((user) => user.id === 2);

console.log(user);

// find() array
const numbers = [5, 12, 8, 130, 44];

const found = numbers.find((number) => number > 10);

console.log(found);
