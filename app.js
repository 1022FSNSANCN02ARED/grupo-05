const express = require("express");
//const { resolve } = require("path");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  __dirname + res.sendFile(path.resolve(__dirname, "views/index.html"));
});
app.get("/login", (req, res) => {
  __dirname + res.sendFile(path.resolve(__dirname, "views/pages/login.html"));
});
app.get("/product", (req, res) => {
  __dirname + res.sendFile(path.resolve(__dirname, "views/pages/product.html"));
});
app.get("/register", (req, res) => {
  __dirname +
    res.sendFile(path.resolve(__dirname, "views/pages/register.html"));
});

app.listen(3001, () => {
  console.log("Server prendido");
});
