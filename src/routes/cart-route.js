const { Router } = require("express");
const cartController = require("../controllers/cart-controller");
const router = Router();

router.get("/", cartController.showCart);

router.post("/add/:id", cartController.addProduct);
router.post("/decrease/:id", cartController.decreaseProduct);

router.delete("/clearProduct/:id", cartController.clearProductFromCart);

module.exports = router;
