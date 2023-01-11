const { Router } = require("express");
const router = Router();

const productsControllers = require("../controllers/products-controllers.js");

/* http:// localhost:(Port)/products */
router.get("/", productsControllers.product);

module.exports = router;
