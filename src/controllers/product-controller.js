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

  searchProduct: (req, res) => {
    db.Product.findAll().then((product) => {
      let busqueda = req.query.search;
      let found = [];

      product.forEach((game) => {
        if (
          game.name.includes(busqueda) ||
          game.name.includes(busqueda.toUpperCase())
        ) {
          found.push(game);
        }
      });

      res.render("search", { found });
    });
  },
};
