const { Category } = require("../../../database/models");
const pageSize = 5;

const categoryAPIController = {
  list: async (req, res) => {
    const { count, rows } = await Category.findAndCountAll();
    res.json({
      meta: {
        status: 200,
        total: count,
        url: req.originalUrl,
      },
      data: rows,
    });
  },

  /* const page = Number(req.query.page) || 1;
  const offset = (page - 1) * pageSize; */

  categoryDetail: async (req, res) => {
    const category = await Category.findByPk(req.params.id);
    res.json({
      meta: {
        status: !category ? 404 : 200,
        url: req.originalUrl,
      },
      data: category,
    });
  },
};

module.exports = categoryAPIController;
