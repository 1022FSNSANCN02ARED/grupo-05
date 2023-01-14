const path = require("path");

module.exports = {
  home: (req, res) => {
    res.render("index");
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  register: (req, res) => {
    res.render("./users/register");
  },
};
