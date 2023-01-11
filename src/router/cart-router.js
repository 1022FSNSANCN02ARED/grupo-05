const { Router } = require("express");
const router = Router();

const cartControllers = require("../controllers/cart-controllers.js");

router.use("/", cartControllers);

module.exports = router;
