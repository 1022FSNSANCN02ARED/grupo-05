const { Router } = require("express");
const router = Router();

const productsControllers = require("../controllers/products-controllers.js");

/* http:// localhost:(Port)/products */
router.get("/product/:id", productsControllers.product);
router.get("/editar-producto", productsControllers.editar_producto);
router.get("/add-product", productsControllers.agregar);

module.exports = router;
