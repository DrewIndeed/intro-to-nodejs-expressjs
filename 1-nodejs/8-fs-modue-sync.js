// using SYNCHRONOUS methods from fs module
const { readFileSync, writeFileSync } = require("fs");

// reading files content
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first);
console.log(second);

// writing files content

//1. Overwrite the content
writeFileSync("./content/result-sync.txt", `Result: ${first}, ${second}`);

//2. Append the content
writeFileSync("./content/result-sync.txt", `, Appended contents`, {flag: 'a'});