const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("../content/first.txt", "utf8");
    const second = await readFilePromise("../content/second.txt", "utf8");
    await writeFilePromise(
      "./result-read-async-2.txt",
      `THIS IS GOD BLESSING: 1-${first}, 2-${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
