const path = require("path");
const express = require("express");

const mainRouter = require("./routers/main-router");
const utilities = require("./utilities");
const methodOverride = require("method-override");

const app = express();
app.listen(3002);

//***** FUNCIONES GLOBALES ******//
app.locals = utilities;

//***** SETEO DE EJS ******//
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

//***** RUTA A PUBLIC ******//
app.use(express.static(path.join(__dirname, "../public")));

//***** PARA EJECUTAR PUT Y DELETE EN AL ACTION ******//
app.use(methodOverride("_method"));

//***** ENRUTADOR PRINCIPAL ******//
app.use(mainRouter);
