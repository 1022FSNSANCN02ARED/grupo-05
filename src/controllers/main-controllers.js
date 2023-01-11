const path = require("path");

module.exports = {
  home: (req, res) => {
    __dirname + res.sendFile(path.resolve(__dirname, "../views/index.html"));
  },
  login: (req, res) => {
    __dirname + res.sendFile(path.resolve(__dirname, "../views/login.html"));
  },
  register: (req, res) => {
    __dirname + res.sendFile(path.resolve(__dirname, "../views/register.html"));
  },
};
