const path = require("path");

module.exports = {
  product: (req, res) => {
    __dirname + res.sendFile(path.resolve(__dirname, "../views/product.html"));
  },
};
