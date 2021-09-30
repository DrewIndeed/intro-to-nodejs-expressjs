const ld = require('lodash');
const testArr = [1, [2, [3, [4, [999]]], 5]];
console.log(ld.flattenDeep(testArr));