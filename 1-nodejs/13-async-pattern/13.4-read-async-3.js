const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("../content/first.txt", "utf8");
    const second = await readFile("../content/second.txt", "utf8");
    await writeFile(
      "./result-read-async-3.txt",
      `THIS IS BREATHE-TAKING: 1-${first}, 2-${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
