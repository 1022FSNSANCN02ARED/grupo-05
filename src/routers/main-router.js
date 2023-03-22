const { Router } = require("express");
const mainController = require("../controllers/main-controller");
const productRouter = require("./product-router");
const userRouter = require("./user-router");

const router = Router();

router.get("/", mainController.home);

router.use("/products", productRouter);

router.use("/user", userRouter);

module.exports = router;
