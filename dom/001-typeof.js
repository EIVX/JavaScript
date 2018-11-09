console.log(typeof 1); // Number
console.log(typeof 'a'); // String
console.log(typeof true); // Boolean
console.log(typeof new Object()); // Object
console.log(typeof null); // Object
console.log(typeof undefined); // Undefined
var a;
console.log(typeof a); // Undefined
// var b
console.log(typeof b); // Undefined
console.log(typeof new function () {}); // Object
function myfun(){}
console.log(typeof myfun); // function