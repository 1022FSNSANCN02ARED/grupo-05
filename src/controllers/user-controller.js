const db = require("../../database/models");
const { validationResult } = require("express-validator");

module.exports = {
  showLogin: (req, res) => {
    res.render("login");
  },

  showRegister: (req, res) => {
    res.render("register");
  },

  processRegister: (req, res) => {},

  createUser: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.User.create({
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      }).then((user) => {
        res.redirect("/user/login");
      });
    } else {
      res.render("register", {
        errors: errors.array(),
        old: req.body,
      });
    }
  },
};
