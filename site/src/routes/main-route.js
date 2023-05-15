const { Router } = require("express");

const mainController = require("../controllers/main-controller");
const userRoute = require("./user-route");
const productRoute = require("./product-router");
const adminRoute = require("./admin-route");
const cartRoute = require("./cart-route");
const apiUsersRouter = require("./api/userAPIrouter");
const apiProductsRouter = require("./api/productsAPIrouter");
const apiCategoryRouter = require("./api/categoryAPIrouter");

const router = Router();

router.get("/", mainController.home);

router.use("/user", userRoute);

router.use("/product", productRoute);

router.use("/admin", adminRoute);

router.use("/cart", cartRoute);

router.use("/api/users", apiUsersRouter);
router.use("/api/products", apiProductsRouter);
router.use("/api/category", apiCategoryRouter);

module.exports = router;
