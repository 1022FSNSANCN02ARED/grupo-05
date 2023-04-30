const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      awards: DataTypes.INTEGER,
    },
    {
      tableName: "products",
      timestamps: false,
    }
  );

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      as: "category",
      foreingKey: "categoryId",
    });
  };

  return Product;
};
