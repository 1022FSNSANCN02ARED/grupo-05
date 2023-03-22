const { Router, urlencoded } = require("express");
const router = Router();
const path = require("path");
const productController = require("../controllers/product-controller");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/imgs/productos-img"),
  filename: (req, file, cb) => {
    cb(null, "image-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get("/myProducts", productController.myProducts);

router.get("/create", productController.createProduct);
router.post("/store", upload.single("image"), productController.storeProduct);

router.get("/edit/:id", productController.showEditProduct);
router.put("/update/:id", productController.editProduct);

router.delete("/delete/:id", productController.deleteProduct);

router.get("/cart", productController.showCart);

router.get("/category/:id", productController.showCategories);

router.get("/:id", productController.detail);

module.exports = router;
