// Math.floor() adalah fungsi yang digunakan untuk membulatkan angka ke bawah ke bilangan bulat terdekat.

// Math.ceil() adalah fungsi yang digunakan untuk membulatkan angka ke atas ke bilangan bulat terdekat.

// Math.round() adalah fungsi yang digunakan untuk membulatkan angka ke bilangan bulat terdekat

function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}

console.log(getAverage([1, 2, 3, 4, 5])); // 3
