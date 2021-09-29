// using ASYNCHRONOUS methods from fs module
const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-sync.txt",
      `Result: ${first}, ${second}`,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log("Written successfully");
      }
    );
  });
});
