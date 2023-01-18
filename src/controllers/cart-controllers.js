const path = require("path");

module.exports = {
  cart: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/pages/cart.html"));
  },
};
