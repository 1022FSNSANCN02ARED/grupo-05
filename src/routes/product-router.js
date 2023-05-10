const { Router } = require("express");
const router = Router();
const productRouter = require("../controllers/product-controller");
const productController = require("../controllers/product-controller");

router.get("/showProduct/:id", productRouter.showProduct);
router.get("/showCategory/:id", productController.showCategory);
router.get("/searchProduct", productController.searchProduct);

module.exports = router;
