const { body } = require("express-validator");

const validations = [
  body("first__name").notEmpty().withMessage("Debe completar éste campo"),
  body("last__name").notEmpty().withMessage("Debe completar éste campo"),
  body("user__name").notEmpty().withMessage("Debe completar éste campo"),
  body("password").notEmpty().withMessage("Debe completar éste campo"),
  body("confirm__password").notEmpty().withMessage("Debe completar éste campo"),
  body("phone").notEmpty().withMessage("Debe completar éste campo"),
  body("province").notEmpty().withMessage("Debe completar éste campo"),
  body("terms").notEmpty().withMessage("Debe completar éste campo"),
  body("email")
    .notEmpty()
    .withMessage("Debe completar éste campo")
    .bail()
    .isEmail()
    .withMessage("Formato de correo inválido"),
  body("avatar").custom((value, { req }) => {
    const file = req.file;
    const acceptedExtensions = [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".bmp",
      ".svg",
      ".webp",
    ];

    if (!file) {
      throw new Error("Debes cargar una Imagen");
    } else {
      const fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Solo se aceptan archivos son ${acceptedExtensions.join(", ")}`
        );
      }
    }
    return true;
  }),
];

module.exports = validations;
