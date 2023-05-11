const { Router } = require("express");
const router = Router();

/* CONTROLLERS */
const userController = require("../controllers/user-controller");
const validationRegister = require("../middlewares/validationRegister");

/* MIDDLEWARES */
const uploadFileAvatar = require("../middlewares/multerAvatar");

router.get("/login", userController.showLogin);

router.get("/register", userController.showRegister);

//Create user
router.post("/create", validationRegister, userController.createUser);

/* perfil del usuario */
/* router.get("/profile/:userId", userController.profile); */

module.exports = router;
