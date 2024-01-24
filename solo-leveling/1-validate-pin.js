// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN(pin) {
  //return true or false
  return /^(\d{4}|\d{6})$/.test(pin);
}

console.log(validatePIN("124444"));

// penjelasan validatePIN :
// https://chat.openai.com/share/8c9c52b9-6c49-4259-b62c-dbd3aebd2e54
