const { DataTypes, Sequelize } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  let alias = "Users";

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.STRING,
    },
  };

  let config = {
    tableName: "users",
    timestamps: false,
  };

  const Users = Sequelize.define(alias, cols, config);

  Users.associate = (models) => {
    Users.belongsToMany(models.Product, {
      through: models.CartProduct,
      as: "productsInCart",
    });
  };

  return Users;
};
