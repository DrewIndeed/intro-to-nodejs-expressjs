const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    // send as A GIANT
    // const text = fs.readFileSync('./big.txt', 'utf8');
    // res.end(text);

    // send as SMALL CHUNKS
    const fileStream = fs.createReadStream("./big.txt", "utf8");
    fileStream.on(
      "open",
      () => fileStream.pipe(res) // pipe() will push from the read stream to the write stream
      // so you not only can read file in chuncks but also write file like that as well
    );
    fileStream.on("error", (err) => res.end(err));
  })
  .listen(5000);
