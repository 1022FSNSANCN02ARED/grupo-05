const { Router } = require("express");
const router = Router();
const adminController = require("../controllers/admin-controller");
const uploadFileProduct = require("../middlewares/multerProduct");
const validationCreateProduct = require("../middlewares/validationCreateProduct");

router.get("/", adminController.showAdmin);

//Create
router.post(
  "/createProduct",
  uploadFileProduct.single("image"),
  validationCreateProduct,
  adminController.createProduct
);

//Edit
router.get("/searchProductAdminEdit", adminController.searchProductAdminEdit);
router.get("/showProductAdminEdit/:id", adminController.showProductAdminEdit);
router.put(
  "/editProduct/:id",
  uploadFileProduct.single("image"),
  validationCreateProduct,
  adminController.editProduct
);

//Delete
router.get(
  "/showProductAdminDelete/:id",
  adminController.showProductAdminDelete
);
router.get(
  "/searchProductAdminDelete",
  adminController.searchProductAdminDelete
);
router.delete("/deleteProduct/:id", adminController.deleteProduct);

module.exports = router;
