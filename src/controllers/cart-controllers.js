const path = require("path");
const productos = require("../data/data-products");

module.exports = {
  cart: (req, res) => {
    const id = req.params.id;
    res.render("cart", { productos, id });
  },
};
