const { findAll } = require("../data/products");

module.exports = {
  home: (req, res) => {
    res.render("index", {
      visitedProducts: findAll().filter(
        (theProduct) => theProduct.status == "visited"
      ),
      ofertProducts: findAll().filter(
        (theProduct) => theProduct.status == "ofert"
      ),
    });
  },
};
