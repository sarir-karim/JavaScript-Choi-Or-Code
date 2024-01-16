// * Type conversion means converting a type from one dataype to another.

//! for Example

let score = 29;
let mixValue = "null";

let convertedVariable = Number(mixValue)

console.log(score); // 29 
console.log(typeof score); // number 
console.log( typeof mixValue) // 'Ali123
console.log(typeof convertedVariable) // 'NAN


const isLoggedIn = {};

let changedLogin = Boolean(isLoggedIn);

console.log(changedLogin);