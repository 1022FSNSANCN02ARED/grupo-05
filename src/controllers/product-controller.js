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
          game.name.toUpperCase().includes(busqueda) ||
          game.name.toLowerCase().includes(busqueda)
        ) {
          found.push(game);
        }
      });

      res.render("search", { found });
    });
  },

  //Post
  createProduct: (req, res) => {
    db.Product.create({
      awards: req.body.awards,
      description: req.body.description,
      image: req.body.image,
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
    }).then((product) => {
      res.json(product);
    });
  },

  //Put - Postman
  editProduct: (req, res) => {
    db.Product.update(
      {
        awards: req.body.awards,
        description: req.body.description,
        image: req.body.image,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((product) => {
      res.json({ message: "Producto editado con éxito", product });
    });
  },

  //Delete - Postman
  deleteProduct: (req, res) => {
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
    }).then((product) => {
      res.json({ message: "Producto eliminado con éxito", product });
    });
  },
};
