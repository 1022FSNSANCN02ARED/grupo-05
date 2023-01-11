const { Router } = require("express");
const router = Router();

/* === controladores principales === */
const mainControllers = require("../controllers/main-controllers.js");

/* === Enrutador de productos === */
const productRouter = require("./products-router.js");

/* === Enrutador de carrito === */
const cartRouter = require("./cart-router.js");

/* ===================================================== */

/* === rutas principales === */

router.get("/", mainControllers.home);
router.get("/login", mainControllers.login);
router.get("/register", mainControllers.register);

/* === rutas de products === */

router.use("/products", productRouter);

/* === rutas de cart === */

router.use("/carts", cartRouter);

/* ===================================================== */

module.exports = router;
