/* 
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const path = require("path"); */

const { Users } = require("../../../database/models");
const pageSize = 5;

const userAPIController = {
  list: async (req, res) => {
    const page = Number(req.query.page) || 1;
    const offset = (page - 1) * pageSize;

    const { count, rows } = await Users.findAndCountAll({
      limit: pageSize,
      offset: offset,
    });
    res.json({
      meta: {
        status: 200,
        total: count,
        url: req.originalUrl,
      },
      data: rows,
    });
  },

  userDetail: async (req, res) => {
    const user = await Users.findByPk(req.params.id);
    res.json({
      meta: {
        status: !user ? 404 : 200,
        url: req.originalUrl,
      },
      data: user,
    });
  },
};

module.exports = userAPIController;
