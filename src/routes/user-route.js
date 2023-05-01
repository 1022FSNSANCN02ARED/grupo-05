const { Router } = require("express");
const router = Router();

/* CONTROLLERS */
const userController = require("../controllers/user-controller");

/* MIDDLEWARES */
const uploadFile = require("../middlewares/multer");
const validations = require("../middlewares/validationRegister");

router.get("/login", userController.showLogin);

router.get("/register", userController.showRegister);
router.post("/register", uploadFile.single("avatar"), validations, userController.processRegister);

/* perfil del usuario */
/* router.get("/profile/:userId", userController.profile); */

module.exports = router;
