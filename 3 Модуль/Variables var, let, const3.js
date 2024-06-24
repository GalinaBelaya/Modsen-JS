// var
console.log(myVar); // undefined
var myVar = "Hello"; 

// let
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = "World";

// const
console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = "!";