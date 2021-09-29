// required

// way 1
// const names = require('./2-names');
// way 2
const { john, peter, thu } = require('./2-names');
const sayHi = require('./3-utils');

// way 1
// sayHi(names.john);
// sayHi(names.peter);

// way 2
sayHi(john);
sayHi(peter);
sayHi(thu);
sayHi('Susan');

// alternative 
const data = require('./4-alternative-flavor');
console.log(data);