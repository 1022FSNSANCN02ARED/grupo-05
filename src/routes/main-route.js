const { Router } = require("express");

const mainController = require("../controllers/main-controller");
const userRoute = require("./user-route");
const productRoute = require("./product-router");
const adminRoute = require("./admin-route");
const cartRoute = require("./cart-route");

const router = Router();

router.get("/", mainController.home);

router.use("/user", userRoute);

router.use("/product", productRoute);

router.use("/admin", adminRoute);

router.use("/cart", cartRoute);

module.exports = router;
