const mahasiswa = "Lista344";
const nilai = 345;

let nilaiKehadiran = 40;
let nilaiTugas = "70";

const totalNilai = nilaiKehadiran + nilaiTugas;

console.log(totalNilai);

let nilaiAkhir = 81;

if (nilaiAkhir == 80) {
  console.log("nilai anda adalah " + nilaiAkhir + " anda lulus");
} else {
  console.log("nilai anda adalah " + nilaiAkhir + " anda tidak lulus");
}

function genap(angka) {
  angka % 2 === 0 ? "angka genap" : "angka ganjil";
}

console.log(genap(9));


