// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

// function hero(bullets, dragons) {
//   //Get Coding!
//   if (bullets / 2 >= dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

// initial value dari conditional logic = true or false (truthy or falsy)
// pengkondisian (conditional logic), secara default mengembalikan true or false

// contoh 1:
// function hero(bullets, dragon) {
//   return bullets / 2 >= dragon ? true : false;
// }

// contoh 2:
const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(10, 5));
