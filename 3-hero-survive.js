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
const hero = (bullets, dragons) => bullets / 2 >= dragons;

// function hero(bullets, dragon) {
//   return bullets / 2 >= dragon ? true : false;
// }

console.log(hero(10, 5));
