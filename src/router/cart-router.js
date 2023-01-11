const { Router } = require("express");
const router = Router();

const cartControllers = require("../controllers/cart-controllers.js");

router.get("/", cartControllers.cart);

module.exports = router;
