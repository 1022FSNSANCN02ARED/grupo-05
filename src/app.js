/* dependencias requeridas */
const express = require("express");
const app = express();

const path = require("path");
//const { resolve } = require("path");

const mainRouter = require("./router/main-router.js");

/* ==== puerto === */

app.listen(3001, () => {
  console.log("Server prendido");
});

/* ==== ruta a archivos public === */

app.use(express.static(path.join(__dirname, "public")));

/* === rutas a views === */
app.use(mainRouter);
