const db = require("../../database/models");
const Op = db.Sequelize.Op;

module.exports = {
  home: (req, res) => {
    db.Product.findAll({
      include: [{ association: "category" }],
    }).then((product) => {
      res.render("index", { product });
    });
  },
};
