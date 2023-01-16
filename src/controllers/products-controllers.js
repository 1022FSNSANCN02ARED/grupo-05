const path = require("path");
const productos = require("../views/data-products");

module.exports = {
  product: (req, res) => {
    const id = req.params.id;
    res.render("product", { productos, id });
  },
};
