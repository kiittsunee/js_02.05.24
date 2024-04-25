const {compareVersion} = require('./compareVersion.js');

console.log(compareVersion('0.1', '0.2'));
console.log(compareVersion('0.2', '0.1'));
console.log(compareVersion('4.2', '4.2'));