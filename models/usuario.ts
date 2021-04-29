import { DataTypes } from "sequelize";
import db from "../db/connection";

const Usuario = db.define(
  "Usuario",
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    estado: {
      type: DataTypes.BOOLEAN,
    },
    rol: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Usuario;
