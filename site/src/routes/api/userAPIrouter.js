const { Router } = require("express");
const router = Router();

const userAPIController = require("../../controllers/api/userAPIcontroller");

router.get("/", userAPIController.list);
router.get("/:id", userAPIController.userDetail);
router.delete("/delete/:id", userAPIController.userDelete);

module.exports = router;
