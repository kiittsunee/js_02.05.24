const {chunk} = require('./chunk.js');
const {compareVersion} = require('./compareVersion.js');
const {calculateSum} = require('./calculateSum.js');

console.log(compareVersion('0.1', '0.2'));
console.log(compareVersion('0.2', '0.1'));
console.log(compareVersion('4.1', '4.2'));
console.log(compareVersion('1.12', '13.37'));

const arr1 = ['a', 'b', 'c', 'd'];
console.log(chunk(arr1, 3)); // [['a', 'b', 'c'], ['d']]
console.log(chunk(arr1, 2)); // [['a', 'b'], ['c', 'd']]

const coll1 = [8, 9, 21, 19, 18, 22, 7];
console.log(calculateSum(coll1)); // 48

const coll2 = [2, 0, 17, 3, 9, 15, 4];
console.log(calculateSum(coll2)); // 27

const coll = [];
console.log(calculateSum(coll)); // 0