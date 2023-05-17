const db = require("../../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const path = require("path");

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

  //Create User
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

  //Login User
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
            //res.locals.adminLog = user.rol;
            if (req.body.recordame) {
              res.cookie("recordame", userLog.email, { maxAge: 60000000 });
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

  //Logout User
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/");
  },

  //Delete User
  deleteUser: (req, res) => {
    db.Users.destroy({
      where: {
        id: req.session.userLog.id,
      },
    }).then((user) => {
      req.session.destroy();
      res.redirect("/");
    });
  },

  //Edit User
  editUser: (req, res) => {
    let errors = validationResult(req);
    let id = req.params.id;

    if (errors.isEmpty()) {
      db.Users.update(
        {
          name: req.body.name,
          email: req.body.email,

          password: bcrypt.hashSync(req.body.password, 10),
        },
        {
          where: {
            id: req.session.userLog.id,
          },
        }
      ).then((user) => {
        req.session.destroy();

        res.redirect("/user/login");
      });
    } else {
      db.Users.findByPk(req.session.userLog.id).then((user) => {
        res.render("profile", {
          errors: errors.array(),
          old: req.body,
          user,
        });
      });
    }
  },

  editAvatar: (req, res) => {
    let avatarErrors = validationResult(req);
    let id = req.params.id;

    if (avatarErrors.isEmpty()) {
      db.Users.update(
        {
          avatar: req.file.filename,
        },
        {
          where: {
            id: req.session.userLog.id,
          },
        }
      ).then((user) => {
        req.session.destroy();

        res.redirect("/user/login");
      });
    } else {
      db.Users.findByPk(req.session.userLog.id).then((user) => {
        res.render("profile", {
          avatarErrors: avatarErrors.array(),
          user,
        });
      });
    }
  },
};
