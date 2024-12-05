function disemvowel(str) {
  const vowels = /[aeiouAEIOU]/gi;
  // replace all vowels with empty string
  return str.replace(vowels, "");
}

console.log(disemvowel("What are you, a communist?"));

// cara lain
// const vowels = "aeiou";

// function disemvowel(str) {
//   return str
//     .split("")
//     .filter((letter) => !vowels.includes(letter.toLowerCase()))
//     .join("");
// }

// console.log(disemvowel("What are you, a communist?"));
