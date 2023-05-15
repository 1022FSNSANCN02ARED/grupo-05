const { Router } = require("express");
const cartController = require("../controllers/cart-controller");
const router = Router();

/* Middleware */
const authMiddleware = require("../middlewares/authMiddleware");
router.use(authMiddleware);

router.get("/", cartController.showCart);

router.post("/add/:id", cartController.addProduct);
router.post("/decrease/:id", cartController.decreaseProduct);

router.delete("/clearProduct/:id", cartController.clearProductFromCart);
router.delete("/clearCart", cartController.clearCart);

module.exports = router;
