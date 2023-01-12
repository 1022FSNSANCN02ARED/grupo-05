/* dependencias requeridas */
const express = require("express");
const app = express();

const path = require("path");
//const { resolve } = require("path");

const mainRouter = require("./router/main-router.js");
const productRouter = require("./router/products-router");

/* ==== puerto === */

app.listen(3001, () => {
  console.log("Server prendido");
});

/* ==== ruta a archivos public === */

app.use(express.static(path.resolve(__dirname, "../public")));

/* === rutas a views === */
app.use(mainRouter);
app.use(productRouter);

/* === Seteamos el engine view === */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
