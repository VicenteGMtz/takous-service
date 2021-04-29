import { Router } from "express";
import {
  deleteProveedor,
  getProveedor,
  getProveedores,
  postProveedor,
  putProveedor,
} from "../controllers/proveedor";

const proveedoresRouter = Router();

proveedoresRouter.get("/", getProveedores);
proveedoresRouter.get("/:idProveedor", getProveedor);
proveedoresRouter.post("/", postProveedor);
proveedoresRouter.put("/:idProveedor", putProveedor);
proveedoresRouter.delete("/:idProveedor", deleteProveedor);

export default proveedoresRouter;
