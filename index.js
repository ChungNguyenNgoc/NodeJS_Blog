const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const ModbusRTU = require("modbus-serial");
const client = new ModbusRTU();

client
  .connectTCP("192.168.10.33", { port: 502 })
  .then(() => {
    console.log("Connected to PLC");
  })
  .catch((error) => {
    console.error("Failed to connect to PLC:", error);
  });

app.use(morgan("combined"));

app.get("/search", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;

  res.send("<h1>Chung NguyeNgoc</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
