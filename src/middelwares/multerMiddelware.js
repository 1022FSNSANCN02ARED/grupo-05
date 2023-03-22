const path = require("path");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/imgs/users-img"),
  filename: (req, file, cb) => {
    cb(null, "user-img-" + Date.now().path.extname(file.originalname));
  },
});

const upLoad = multer({ storage });

module.exports = upLoad;
