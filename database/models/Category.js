const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      icon: DataTypes.STRING,
    },
    {
      tableName: "category",
      timestamps: false,
    }
  );

  Category.associate = (models) => {
    Category.hasMany(models.Product, {
      as: "product",
      foreingKey: "categoryId",
    });
  };
  return Category;
};
