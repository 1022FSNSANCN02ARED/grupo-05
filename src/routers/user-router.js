const { Router } = require("express");
const path = require("path");
const router = Router();

const userController = require("../controllers/user-controller");

const uploadFile = require("../middelwares/multerMiddelware");
const validationsRegister = require("../middelwares/validationsRegisterMiddelware");

router.get("/login", userController.showLogin);
//router.post("/login", userController.showLogin);

router.get("/register", userController.showRegister);
router.post(
  "/register",
  uploadFile.single("image"),
  validationsRegister,
  userController.saveUser
);

router.get("/profile/:userId", userController.showProfile);

router.get("/allUser", userController.allUser);

module.exports = router;
