const { body } = require("express-validator");

validationAvatar = [
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    if (!file) {
      throw new Error("Tienes que subir una imagen");
    }
    return true;
  }),
];

module.exports = validationAvatar;
