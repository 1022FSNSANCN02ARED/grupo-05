const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = {
  showLogin: (req, res) => {
    res.render("login");
  },

  showRegister: (req, res) => {
    res.render("register");
  },

  processRegister: (req, res) => {
    const resultValidations = validationResult(req);

    if (resultValidations.errors.length > 0) {
      res.render("register", {
        errors: resultValidations.mapped(),
        oldData: req.body,
      });
    }
  },

  createUser: (req, res) => {
    db.User.create({
      name: req.body.name,
      userName: req.body.userName,
      email: req.body.email,
      avatar: req.file.filename,
      password: req.body.password,
    }).then((user) => {
      res.json(user);
    });
  },
};
