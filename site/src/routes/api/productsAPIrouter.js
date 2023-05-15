const { Router } = require("express");
const router = Router();

const productAPIController = require("../../controllers/api/productAPIcontroller");

router.get("/", productAPIController.list);
router.get("/:id", productAPIController.productDetail);

module.exports = router;
