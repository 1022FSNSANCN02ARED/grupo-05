const db = require("../../database/models");
const { validationResult } = require("express-validator");

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
    let errors = validationResult(req);

    if (errors.isEmpty()) {
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
      res.render("menu-admin", { errors: errors.array(), old: req.body });
    }
  },

  //Put
  editProduct: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Product.update(
        {
          id: req.params.id,
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
    } else {
      res.render("editAdmin", { errors: errors.array(), old: req.body });
    }
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
