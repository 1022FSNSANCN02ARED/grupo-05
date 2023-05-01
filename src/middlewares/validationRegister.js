/* EXPRESS VALIDATOR */
const path = require("path");
const { body } = require("express-validator");

const validations = [
  body("fullName").notEmpty().withMessage("Debe escribir un nombre"),
  body("email")
    .notEmpty()
    .withMessage("Debe escribir un correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),
  body("password").notEmpty().withMessage("Debe escribir una contraseña"),
  body("country").notEmpty().withMessage("Tienes que elegir un país"),
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];

    if (!file) {
      throw new Error("Debe subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`);
      }
    }

    return true;
  }),
];

module.exports = validations;
/* EXPRESS VALIDATOR */
