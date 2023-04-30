const db = require("../../database/models");

module.exports = {
  showProduct: (req, res) => {
    db.Product.findByPk(req.params.id).then((product) => {
      res.render("product", { product });
    });
  },

  showCategory: (req, res) => {
    db.Category.findByPk(req.params.id, {
      include: [{ association: "product" }],
    }).then((category) => {
      res.render("category", { category });
    });
  },
};
