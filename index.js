const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");

app.use(morgan("combined"));

app.get("/chungngngalta2", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;

  return res.send("Hello World Chung Nguyen Ngoc!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
