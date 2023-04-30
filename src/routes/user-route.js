const { Router } = require("express");
const userController = require("../controllers/user-controller");
const router = Router();

/* EXPRESS VALIDATOR */

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
/* EXPRESS VALIDATOR */

/** MULTER **/
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/avatars");
  },
  filename: (req, file, cb) => {
    let fileName = `user-avatar-${Date.now()} ${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const uploadFile = multer({ storage });

/** MULTER **/

router.get("/login", userController.showLogin);

router.get("/register", userController.showRegister);
router.post("/register", uploadFile.single("avatar"), validations, userController.processRegister);

/* perfil del usuario */
/* router.get("/profile/:userId", userController.profile); */

module.exports = router;
