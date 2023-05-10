/** MULTER **/
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/products");
  },
  filename: (req, file, cb) => {
    let fileName = `product-image-${Date.now()}${path.extname(
      file.originalname
    )}`;
    cb(null, fileName);
  },
});

const uploadFileProduct = multer({ storage });

module.exports = uploadFileProduct;
