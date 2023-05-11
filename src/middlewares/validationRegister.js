const { body } = require("express-validator");

validacionesRegister = [
  body("name").notEmpty().withMessage("Debes completar el campo nombre"),
  body("userName")
    .notEmpty()
    .withMessage("El nombre de usuario debe tener al menos 4 caracteres"),

  body("email")
    .notEmpty()
    .withMessage("Debes completar el campo email")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un email válido"),
  body("password")
    .notEmpty()
    .withMessage("Debes completar el campo contraseña")
    .bail()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres"),
  body("password2").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Las contraseñas no coinciden");
    }
    return true;
  }),
];

module.exports = validacionesRegister;
