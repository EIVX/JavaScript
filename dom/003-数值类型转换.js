console.log(Number('070')); // 70
console.log(parseInt('070')); // 70
console.log(parseInt('070',8)); // 56
console.log(parseFloat('070')); // 70

console.log(Number('1a')); // NaN
console.log(parseInt('1a')); // 1
console.log(parseFloat('1a')); // 1

console.log(Number('1.1.1')); // NaN
console.log(parseInt('1.1.1')); // 1
console.log(parseFloat('1.1.1')); // 1.1

console.log(Number('red')); // NaN
console.log(parseInt('red')); // NaN
console.log(parseFloat('red')); // NaN

console.log(Number('')); // 0
console.log(parseInt('')); // NaN
console.log(parseFloat('')); // NaN