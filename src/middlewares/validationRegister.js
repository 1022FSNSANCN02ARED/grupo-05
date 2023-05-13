const { body } = require("express-validator");

validacionesRegister = [
  body("name").notEmpty().withMessage("Debes completar el campo nombre"),

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
    .isLength({ min: 3 })
    .withMessage("La contraseña debe tener al menos 3 caracteres"),
  body("password2").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Las contraseñas no coinciden");
    }
    return true;
  }),
];

module.exports = validacionesRegister;
