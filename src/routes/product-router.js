const { Router } = require("express");
const router = Router();
const productRouter = require("../controllers/product-controller");
const productController = require("../controllers/product-controller");

router.get("/showProduct/:id", productRouter.showProduct);
router.get("/showCategory/:id", productController.showCategory);
router.get("/searchProduct", productController.searchProduct);
//Ruta para vista de create
//router.get("/newProduct", productController.newProduct)
//Post de createProduct
router.post("/createProduct", productController.createProduct);
//Put de editProduct
router.put("/editProduct/:id", productController.editProduct);
//Delete de deleteProduct
router.delete("/deleteProduct/:id", productController.deleteProduct);

module.exports = router;
