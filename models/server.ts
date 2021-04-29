import express, { Application } from "express";
import userRoutes from "../routes/usuarios";
import productRoutes from "../routes/producto";
import proveedoresRouter from "../routes/proveedor";
import compraRoutes from "../routes/compra";
import consumerRoutes from "../routes/consumidor";
import cors from "cors";
import db from "../db/connection";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
    producto: "/api/productos",
    proveedores: "/api/proveedores",
    compras: "/api/compras",
    consumidores: "/api/consumidores",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    //metodos iniciales
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();

      console.log("db online");
    } catch (error) {
      console.log(error);
    }
  }

  //middlewares funciones que se ejecutan antes de otros procedimientos
  middlewares() {
    //CORS
    this.app.use(cors());
    //LECTURA DEL BODY
    this.app.use(express.json());
    //carperta pública
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
    this.app.use(this.apiPaths.producto, productRoutes);
    this.app.use(this.apiPaths.proveedores, proveedoresRouter);
    this.app.use(this.apiPaths.compras, compraRoutes);
    this.app.use(this.apiPaths.consumidores, consumerRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo por el puerto ` + this.port);
    });
  }
}

export default Server;
