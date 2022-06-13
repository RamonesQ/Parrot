import { User } from "./users";

const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

export const Post = db.define(
  "Post",
  {
    idPost: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    user_idUser: {
      type: DataTypes.INTEGER,
      references: {
          model: User,
          key: 'idUser'
      }
      
    },

  },
  {
    tableName: "post",
  }
);
