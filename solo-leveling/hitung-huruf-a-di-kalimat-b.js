// case 1 : hitung jumlah huruf (a) di kalimat (b)

function myFn(a, b) {
  const jumlahHuruf = b.split(a).length - 1;
  console.log(b.split(a));

  return "Jumlah huruf " + a + " pada kalimat b adalah : " + jumlahHuruf;
}

console.log(myFn("k", "kami pergi ke pasar beli kiwi kuning"));

// case 2 : jika a berisi b, tambahkan b ke awal. jika tidak, tambahkan b ke akhir
// "includes()" return true / false
function myFn2(a, b) {
  return a.includes(b) ? b + a : a + b;
}

console.log(myFn2("kami", "a"));
console.log(myFn2("java", "script"));
console.log(myFn2("lips", "s"));
