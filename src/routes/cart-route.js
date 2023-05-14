const { Router } = require("express");
const cartController = require("../controllers/cart-controller");
const router = Router();

router.get("/", cartController.showCart);

module.exports = router;
