const path = require("path");

module.exports = {
  product: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/product.html"));
  },
};
