import { DataTypes } from "sequelize";
import db from "../db/connection";

const Compra = db.define(
  "Compra",
  {
    idCompra: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigoProducto: {
      type: DataTypes.INTEGER,
    },
    fecha: {
      type: DataTypes.DATE,
    },
    cantidad: {
      type: DataTypes.FLOAT,
    },
    estado: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Compra;
