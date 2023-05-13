const db = require("../../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

module.exports = {
  showLogin: (req, res) => {
    res.render("login");
  },

  showRegister: (req, res) => {
    res.render("register");
  },

  showProfile: (req, res) => {
    res.render("profile", { user: req.session.userLog });
  },

  createUser: (req, res) => {
    let errors = validationResult(req);

    //res.send(errors);
    if (errors.isEmpty()) {
      db.Users.create({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
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

  logedUser: (req, res) => {
    let errors = validationResult(req);
    req.session.userLog;
    //res.send(errors);
    if (errors.isEmpty()) {
      db.Users.findOne({
        where: {
          email: req.body.emailLogin,
        },
      }).then((user) => {
        if (user) {
          if (bcrypt.compareSync(req.body.passwordLogin, user.password)) {
            req.session.userLog = user;
            let userLog = req.session.userLog;
            if (req.body.recordame) {
              res.cookie("recordame", userLog.email, { maxAge: 60000 });
            }
            res.redirect("/user/profile");
          } else {
            res.render("login", {
              errors: [{ msg: "Contraseña incorrecta" }],
            });
          }
        } else {
          res.render("login", {
            errors: [{ msg: "No se encuentra el usuario" }],
          });
        }
      });
    } else {
      res.render("login", { errors: errors.array() });
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/");
  },
};
