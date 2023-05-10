/** MULTER **/
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/avatars");
  },
  filename: (req, file, cb) => {
    let fileName = `user-avatar-${Date.now()}${path.extname(
      file.originalname
    )}`;
    cb(null, fileName);
  },
});

const uploadFileAvatar = multer({ storage });

module.exports = uploadFileAvatar;

/** MULTER **/
