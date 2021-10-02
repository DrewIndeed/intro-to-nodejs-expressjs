const ep = require("express");
const path = require("path");
const app = ep();

// handle the PAIN
app.use(ep.static("./public"));

// get resouces
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

// handle 404 Not Found
app.all("*", (req, res) => {
  res.status(404).send("Resource Not Found");
});

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
