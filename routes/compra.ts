import { Router } from "express";
import {
  deleteCompra,
  getCompra,
  getCompras,
  postCompra,
  putCompra,
} from "../controllers/compra";

const compraRoutes = Router();

compraRoutes.get("/", getCompras);
compraRoutes.get("/:idCompra", getCompra);
compraRoutes.post("/", postCompra);
compraRoutes.put("/:idCompra", putCompra);
compraRoutes.delete("/:idCompra", deleteCompra);

export default compraRoutes;
