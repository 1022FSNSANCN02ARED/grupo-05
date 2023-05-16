const { Router } = require("express");
const router = Router();

/* CONTROLLERS */
const userController = require("../controllers/user-controller");
const validationRegister = require("../middlewares/validationRegister");
const validationLogin = require("../middlewares/validationLogin");
const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require("../middlewares/guetMiddleware");

/* MIDDLEWARES */
const uploadFileAvatar = require("../middlewares/multerAvatar");

router.get("/login", guestMiddleware, userController.showLogin);

router.get("/register", guestMiddleware, userController.showRegister);

router.get("/profile", authMiddleware, userController.showProfile);

//Create user
router.post("/create", validationRegister, userController.createUser);

//Edit user
router.put(
  "/edit/:id",
  uploadFileAvatar.single("avatar"),
  validationRegister,
  userController.editUser
);

//Delete user
router.delete("/deleteUser/:id", userController.deleteUser);

//Login user
router.post("/loged", validationLogin, userController.logedUser);

//Logout user
router.get("/logout", userController.logout);

module.exports = router;
