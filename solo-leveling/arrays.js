// Use the map function to create a new array with inverted values
const invert = (array) => array.map((num) => -num);
console.log(invert([1, 2, 3, 4, 5]));

// ------------------------------------------------------------------------------------------

// penjumlahan menggunakan function reduce (membutuhkan initial value)
const sumMix = (x) => x.reduce((a, b) => a + Number(b), 0);
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));

// perkalian menggunakan function reduce (tidak membutuhkan initial value)
const grow = (x) => x.reduce((a, b) => a * b);
console.log(grow([1, 2, 3]));

// ------------------------------------------------------------------------------------------

// menggabungkan kata menggunakan function join. hilangkan tanda string, tdk ada spasi di awal kata dan akhir kata

// cara 1 :
const smash = (words) => words.join(" ");
console.log(smash(["hello", "world", "this", "is", "great"]));

// cara 2 :
function smash2(words) {
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i];
    // if (i != words.length) result += " "; // option 2
    if (i < words.length - 1) result += " "; // option 2
  }
  return result;
}
console.log(smash2(["hello", "world", "this", "is", "great"]));

// catatan :
// jumlah index dalam array lebih kecil dari jumlah element dalam array.
// index array dimulai dari 0 ==>> [0,1,2,3,4]
// element dimulai dari 1 ==>> [1,2,3,4,5]

// ------------------------------------------------------------------------------------------

// mencari index suatu elemen dalam array.
//  catatan : jika elemen yang dicari tidak ditemukan, fungsi ini akan mengembalikan -1
const findNeedle = (haystack) => {
  // Find the index of "needle" in the array
  const index = haystack.indexOf("needle");

  // Check if the index is found
  if (index !== -1) {
    return "found the needle at position " + index;
  } else {
    return "needle not found in the haystack";
  }
};

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);

// ------------------------------------------------------------------------------------------

// jumlahkan hanya positive number yang ada dalam array

function positiveSum(arr) {
  // filter dan simpan positive numbers
  const positiveNumbers = arr.filter((num) => num > 0);

  // sum the positive numbers
  return positiveNumbers.reduce((acc, current) => acc + current, 0);
}
console.log(positiveSum([-1, 2, 3, 4, -5]));

// ------------------------------------------------------------------------------------------

// buat sebuah function yang mengambil bilangan positif dan string, dan return new list dengan string yang sudah dikeluarkan.

// cara 1
const filter_list = (l) => {
  // Return a new array with the strings filtered out
  return l.filter((item) => typeof item !== "string");
};
console.log(filter_list([1, 2, "a", "b"]));

// cara 2
function filter_list2(l) {
  return l.filter(Number.isInteger);
}
console.log(filter_list2([1, "c", 2, 3, "a", "b"]));
