const { Router } = require("express");
const router = Router();

const categoryAPIController = require("../../controllers/api/categoryAPIcontroller");

router.get("/", categoryAPIController.list);
router.get("/:id", categoryAPIController.categoryDetail);

module.exports = router;
