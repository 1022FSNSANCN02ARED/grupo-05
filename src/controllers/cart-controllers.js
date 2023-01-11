const path = require("path");

module.exports = {
  cart: (req, res) => {
    __dirname +
      res.sendFile(path.resolve(__dirname, "../views/pages/cart.html"));
  },
};
