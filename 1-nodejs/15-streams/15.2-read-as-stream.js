const { createReadStream } = require("fs");

// const stream1 = createReadStream("./big.txt");
// const stream2 = createReadStream("./big.txt", { highWaterMark: 90000 });
// const stream3 = createReadStream("./big.txt", { encoding: "utf8" });

// highWaterMark is in bytes
const stream4 = createReadStream("./big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

stream4.on("data", (rs) => console.log(rs));
stream4.on("error", (err) => console.log(err));
