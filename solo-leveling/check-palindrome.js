function palindrome(str) {
  // change str parameter to lowercase
  let lowercaseStr = str.toLowerCase();

  // reversed string
  let reversedStr = lowercaseStr.split("").reverse().join("");

  // membandingkan string asli yg telah dibersihkan dengan string yang dibalik
  if (lowercaseStr === reversedStr) {
    console.log("its a palindrome");
  } else {
    console.log("its not a plaindrome");
  }
}

palindrome("akka");
