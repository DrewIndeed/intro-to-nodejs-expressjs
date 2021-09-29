const path = require("path");

// get the file separator of the platform that you are on
console.log(path.sep);

// normalized path
// if we add any trailing separator, it will be removed
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// base
const base = path.basename(filePath);
console.log(base);

// absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);