const { DataTypes, Sequelize } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      userName: {
        type: DataTypes.STRING,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      avatar: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );

  return User;
};
