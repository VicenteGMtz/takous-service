import { Router } from "express";
import {
  getProductos,
  getProducto,
  postProducto,
  putProducto,
  deleteProducto,
} from "../controllers/producto";

const productRoutes = Router();

productRoutes.get("/", getProductos);
productRoutes.get("/:codigo", getProducto);
productRoutes.post("/", postProducto);
productRoutes.put("/:codigo", putProducto);
productRoutes.delete("/:codigo", deleteProducto);

export default productRoutes;
