const express = require("express");
//const { resolve } = require("path");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  __dirname + res.sendFile(path.resolve(__dirname, "views/index.html"));
});

app.listen(3000, () => {
  console.log("Server prendido");
});
