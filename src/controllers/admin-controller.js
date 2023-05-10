const db = require("../../database/models");

module.exports = {
  showAdmin: (req, res) => {
    res.render("menu-admin");
  },

  showProductAdminEdit: (req, res) => {
    db.Product.findByPk(req.params.id).then((product) => {
      res.render("editAdmin", { product });
    });
  },

  showProductAdminDelete: (req, res) => {
    db.Product.findByPk(req.params.id).then((product) => {
      res.render("deleteAdmin", { product });
    });
  },

  searchProductAdminEdit: (req, res) => {
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

      res.render("searchEdit", { found });
    });
  },

  searchProductAdminDelete: (req, res) => {
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

      res.render("searchDelete", { found });
    });
  },

  //Post
  createProduct: (req, res) => {
    if (req.file) {
      db.Product.create({
        awards: req.body.awards,
        description: req.body.description,
        image: req.file.filename,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        categoryId: req.body.categoryId,
      }).then((product) => {
        res.redirect("/admin");
      });
    } else {
      res.send("No se cargó ninguna imagen");
    }
  },

  //Put
  editProduct: (req, res) => {
    db.Product.update(
      {
        awards: req.body.awards,
        description: req.body.description,
        image: req.file.filename,
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
      res.redirect("/admin");
    });
  },

  //Delete - Postman
  deleteProduct: (req, res) => {
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
    }).then((product) => {
      res.redirect("/admin");
    });
  },
};
