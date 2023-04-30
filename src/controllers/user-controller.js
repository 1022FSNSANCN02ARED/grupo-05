const { validationResult } = require("express-validator");

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
};
