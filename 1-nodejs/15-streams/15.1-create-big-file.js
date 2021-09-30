const { writeFileSync } = require("fs");
for (let i = 0; i < 100000; i++) {
  writeFileSync("./big.txt", `${i + 1}/ Hello World\n`, { flag: "a" });
}
