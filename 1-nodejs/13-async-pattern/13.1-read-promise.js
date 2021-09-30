const { readFile } = require("fs");

const getText = (path) =>
  new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
        if (err) {
            reject(err);
            return;
        } else {
            resolve(data);
        }
    });
});

getText("../content/first.txt")
  .then((rs) => console.log(rs))
  .catch((err) => console.log(err));
