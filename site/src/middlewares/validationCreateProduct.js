const { body } = require("express-validator");

validateCreateProduct = [
  body("name").notEmpty().withMessage("El campo nombre es obligatorio"),
  body("description")
    .notEmpty()
    .isString({ min: 20, max: 1000 })
    .withMessage("El campo descripción es obligatorio"),
  body("price")
    .notEmpty()
    .isInt({ min: 1, max: 999999 })
    .withMessage("El campo precio es obligatorio"),
  body("image").custom((value, { req }) => {
    let file = req.file;

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    }

    return true;
  }),
  body("stock")
    .notEmpty()
    .isInt({ min: 1, max: 999 })
    .withMessage("El campo stock es obligatorio"),
  body("categoryid").notEmpty().isInt().withMessage("El campo es obligatorio"),
];

module.exports = validateCreateProduct;
