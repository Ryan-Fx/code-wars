// hitung jumlah huruf vokal dalam string (string hanya terdiri dari huruf lowercase)

function getCount(str) {
  const vowels = "aeiou";

  return str
    .toLowerCase()
    .split("") // k m a u
    .filter((c) => vowels.includes(c)).length;
}

console.log(getCount("kmaukemanA"));
