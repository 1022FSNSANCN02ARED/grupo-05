const { Category } = require("../../../database/models");
const pageSize = 5;

const categoryAPIController = {
  list: (req, res) => {
    Category.findAll().then((Category) => {
      let respuesta = {
        meta: {
          status: 200,
          total: Category.length,
          url: "api/category",
        },
        data: Category,
      };
      res.json(respuesta);
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
