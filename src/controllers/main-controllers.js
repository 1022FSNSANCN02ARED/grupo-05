const path = require("path");
const productos = require("../views/data-products");

module.exports = {
  home: (req, res) => {
    res.render("index", { productos });
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  register: (req, res) => {
    res.render("./users/register");
  },
};
