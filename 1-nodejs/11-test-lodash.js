const ld = require('lodash');
const testArr = [1, [2, [3, [4]], 5]];
console.log(ld.flattenDeep(testArr));