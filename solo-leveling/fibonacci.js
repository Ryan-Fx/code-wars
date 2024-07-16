function fibonacci(n) {
  const output = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    // Dalam setiap iterasi, elemen baru dihitung dengan menjumlahkan dua elemen terakhir dari array output: output[i] + output[i + 1].
    output.push(output[i] + output[i + 1]);
  }

  return output.join(" - ");
}

console.log(fibonacci(7));

// n = 3 4 5 6
// i = 0 1 2 3

// fibo = 0, 1, 1, 2, 3, 5
