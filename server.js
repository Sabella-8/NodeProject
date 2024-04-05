const express = require("express");
const app = express();
const port = 5500;
app.get("/codeyourfuture", function (req, res) {
  res.send("welcome to cyf");
});
app.get("/", function (req, res) {
  res.send("hello there");
});

app.listen(port, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
