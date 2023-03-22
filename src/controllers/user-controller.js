const users = require("../data/user");

const crypto = require("crypto");
const path = require("path");

const bcrypt = require("bcryptjs");

const uuid = crypto.randomUUID();

const { validationResult } = require("express-validator");

module.exports = {
  showLogin: (req, res) => {
    res.render("user/login");
  },

  showRegister: (req, res) => {
    res.render("user/register");
  },

  showProfile: (req, res) => {
    res.render("/user/userProfile");
  },

  allUser: (req, res) => {
    res.render("user/allUser", { users: users.AllUser() });
  },

  saveUser: (req, res) => {
    const validations = validationResult(req);

    if (validations.errors.length > 0) {
      return res.render("user/register", {
        errors: validations.mapped(),
        oldData: req.body,
      });
    }
    const user = {
      /* id: uuid,
      ...req.body,

      password: bcrypt.hashSync(req.body.password, 10), */
      /* image: req.file ? req.file.filename : "default-image.png", */
    };
    /* users.SaveUser(user);
    res.redirect("/"); */
  },
};
