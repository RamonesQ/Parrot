const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const User = db.define(
  "User",
  {
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(70),
    },
    email: {
      type: DataTypes.STRING(70),
    },
    apartment: {
      type: DataTypes.INTEGER,
    },
    password: {
      type: DataTypes.STRING(120),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "user",
  }
);
