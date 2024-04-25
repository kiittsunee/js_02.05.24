const {chunk} = require('./chunk.js');
const {compareVersion} = require('./compareVersion.js');

console.log(compareVersion('0.1', '0.2'));
console.log(compareVersion('0.2', '0.1'));
console.log(compareVersion('4.2', '4.2'));

const arr1 = ['a', 'b', 'c', 'd'];
console.log(chunk(arr1, 3)); // [['a', 'b', 'c'], ['d']]
console.log(chunk(arr1, 2)); // [['a', 'b'], ['c', 'd']]