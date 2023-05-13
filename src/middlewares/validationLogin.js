const { body } = require("express-validator");

validationLogin = [
  body("emailLogin")
    .notEmpty()
    .withMessage("Debes completar el campo email")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un email válido"),
  body("passwordLogin")
    .notEmpty()
    .withMessage("Debes completar el campo contraseña")
    .bail()
    .isLength({ min: 3 })
    .withMessage("La contraseña debe tener al menos 3 caracteres"),
];

module.exports = validationLogin;
