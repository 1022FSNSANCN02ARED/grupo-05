const { Router } = require("express");
const router = Router();
const adminController = require ("../controllers/admin-controller")

router.get("/menu-admin", adminController.showAdmin);







module.exports = router;