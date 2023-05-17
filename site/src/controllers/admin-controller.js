const db = require("../../database/models");
const { validationResult } = require("express-validator");
const { Sequelize } = require("sequelize");

module.exports = {
  showAdmin: (req, res) => {
    res.render("admin/menu-admin");
  },

  showProductAdminEdit: (req, res) => {
    db.Product.findByPk(req.params.id).then((product) => {
      res.render("admin/editAdmin", { product });
    });
  },

  showProductAdminDelete: (req, res) => {
    db.Product.findByPk(req.params.id).then((product) => {
      res.render("admin/deleteAdmin", { product });
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

      res.render("admin/searchEdit", { found });
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

      res.render("admin/searchDelete", { found });
    });
  },

  //Post
  createProduct: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Product.create({
        awards: req.body.awards,
        description: req.body.description,
        image: Sequelize.literal(
          `CONCAT('/images/products/', '${req.file.filename}')`
        ),
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        categoryId: req.body.categoryId,
      }).then((product) => {
        res.redirect("/admin");
      });
    } else {
      res.render("admin/menu-admin", { errors: errors.array(), old: req.body });
    }
  },

  //Put
  editProduct: (req, res) => {
    let errors = validationResult(req);
    let id = req.params.id;

    //res.send(errors);
    if (errors.isEmpty()) {
      db.Product.update(
        {
          awards: req.body.awards,
          description: req.body.description,
          image: Sequelize.literal(
            `CONCAT('/images/products/', '${req.file.filename}')`
          ),
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
      db.Product.findByPk(req.params.id).then((product) => {
        res.render("admin/editAdmin", {
          errors: errors.array(),
          old: req.body,
          product,
        });
      });
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
