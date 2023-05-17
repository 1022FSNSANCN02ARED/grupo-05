const { Product } = require("../../../database/models");

const productAPIController = {
  list: async (req, res) => {
    const { count, rows } = await Product.findAndCountAll();
    res.json({
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
