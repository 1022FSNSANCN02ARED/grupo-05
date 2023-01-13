const path = require("path");

module.exports = {
  cart: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../views/pages/cart.html"));
  },
};
