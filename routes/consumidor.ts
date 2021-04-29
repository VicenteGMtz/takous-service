import { Router } from "express";
import {
  getConsumidor,
  getConsumidores,
  saveConsumidor,
} from "../controllers/Consumidor";

const consumerRoutes = Router();

consumerRoutes.get("/", getConsumidores);
consumerRoutes.get("/:idConsumidor", getConsumidor);
consumerRoutes.post("/", saveConsumidor);

export default consumerRoutes;
