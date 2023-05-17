const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const { cookie } = require("express-validator");
const cookieParser = require("cookie-parser");
const recordameMiddleware = require("./middlewares/recordameMiddleware");

const mainRoute = require("./routes/main-route");

const app = express();
app.use(recordameMiddleware);

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: "Secreto" }));
app.use(cors()); //habilita o restringe quienes puede acceder al servidor

app.listen("3001", () => {
  console.log("Sv andando");
});

/* Seteo de ejs */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* Ruta a public */
app.use(express.static(path.join(__dirname, "../public")));

app.use(mainRoute);
