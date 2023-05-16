const { Product } = require("../../../database/models");
const pageSize = 5;

const productAPIController = {
  list: async (req, res) => {
    const page = Number(req.query.page) || 1;
    const offset = (page - 1) * pageSize;

    const { count, rows } = await Product.findAndCountAll({
      limit: pageSize,
      offset: offset,
    });
    res.send({
      meta: {
        status: 200,
        total: count,
        url: req.originalUrl,
      },
      data: rows,
    });
  },

  productDetail: async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    res.json({
      meta: {
        status: !product ? 404 : 200,
        url: req.originalUrl,
      },
      data: product,
    });
  },
};

module.exports = productAPIController;
