const { DataTypes, Sequelize } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  const Category = Sequelize.define(
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
