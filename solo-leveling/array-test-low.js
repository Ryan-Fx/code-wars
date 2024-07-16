var arr = ["merah", "kuning", "hijau", "biru"];

for (let i = 0; i < arr.length; i++) {
  console.log("ini warna " + arr[i]);
}

console.log(arr.join(" - "));

// push
arr.push("pink", "hitam");
console.log(arr.join(" "));

// pop = hapus/keluarkan 1 element
arr.pop();
console.log(arr);
