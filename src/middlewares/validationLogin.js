const { body } = require("express-validator");

validacionesLogin = [
  body("userName")
    .notEmpty()
    .withMessage("Debes completar el campo de usuario"),
  body("password")
    .notEmpty()
    .withMessage("Debes completar el campo de contraseña"),
];

module.exports = validacionesLogin;
