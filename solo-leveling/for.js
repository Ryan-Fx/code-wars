// ini adalah perulangan for
for (let nilaiAwal = 1; nilaiAwal <= 6; nilaiAwal++) {
  console.log("*"); // ini mencetak string
}

let angka = 5;

// ini adalah pengkondisian if else
if (angka > 7) {
  console.log(
    "angka yang anda masukkan adalah " +
      angka +
      ". angkanya adalah lebih besar dari 7 "
  );
} else {
  console.log(
    "angka yang anda masukkan adalah : " +
      angka +
      ". angkanya adalah lebih kecil dari 7"
  );
}

// pengkondisian if else if

let nilaiMahasiswa = 1;

if (nilaiMahasiswa >= 90) {
  console.log(
    "nillai anda adalah" + nilaiMahasiswa + "nilai anda sangat memuaskan"
  );
} else if (nilaiMahasiswa >= 80) {
  console.log("nilai anda adalah " + nilaiMahasiswa + " nilai anda memuaskan");
} else if (nilaiMahasiswa >= 70) {
  console.log("nilai anda adalah " + nilaiMahasiswa + " nilai anda sedang");
} else if (nilaiMahasiswa >= 60) {
  console.log("nilai anda adalah " + nilaiMahasiswa + " nilai anda kurang");
} else {
  console.log("nilai anda error");
}

// switch case
function kalkulator(nilai1, operator, nilai2) {
  switch (operator) {
    case "+":
      return nilai1 + nilai2;
    case "-":
      return nilai1 - nilai2;
    case "*":
      return nilai1 * nilai2;
    case "/":
      return nilai1 / nilai2;
    default:
      return "operator yang anda masukkan salah";
  }
}

console.log(kalkulator(10, "*", 2));
