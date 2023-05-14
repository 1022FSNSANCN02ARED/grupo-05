const db = require("../../database/models");

module.exports = {
  showCart: (req, res) => {
    res.send("Carrito de compras");
  },
};
