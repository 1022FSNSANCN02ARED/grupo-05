const path = require("path");

module.exports = {
  home: (req, res) => {
    res.render("index");
  },
  login: (req, res) => {
    __dirname +
      res.sendFile(path.resolve(__dirname, "../views/users/login.html"));
  },
  register: (req, res) => {
    __dirname +
      res.sendFile(path.resolve(__dirname, "../views/users/register.html"));
  },
};
