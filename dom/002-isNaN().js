console.log(isNaN(NaN)); // true
console.log(isNaN(1)); // false
console.log(isNaN('1')); // false
console.log(isNaN(true)); // false
console.log(isNaN('red')); // true
var myObj = {'a' : 1};
console.log(isNaN(myObj));