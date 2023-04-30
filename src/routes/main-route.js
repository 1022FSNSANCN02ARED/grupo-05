const { Router } = require("express");

const mainController = require("../controllers/main-controller");
const userRoute = require("./user-route");
const productRoute = require("./product-router");

const router = Router();

router.get("/", mainController.home);

router.use("/user", userRoute);

router.use("/product", productRoute);

module.exports = router;
