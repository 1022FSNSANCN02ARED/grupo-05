const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const CartProduct = sequelize.define(
    "CartProduct",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      amount: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      tableName: "carts",
      timestamps: false,
    }
  );

  /* CartProduct.associate = (models) => {
    CartProduct.belongsTo(models.Product, {
      as: "product",
    });
    CartProduct.belongsTo(models.User, {
      as: "user",
    });
  }; */

  return CartProduct;
};
