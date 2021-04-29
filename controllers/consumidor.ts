import { Request, Response } from "express";
import Consumidor from "../models/consumidor";

export const getConsumidores = async (req: Request, res: Response) => {
  const consumidores = await Consumidor.findAll();

  try {
    if (!consumidores) {
      return res.json(500).json({
        msg: "Contacte al administrador",
      });
    }
    res.json({
      consumidores,
    });
  } catch (error) {
    res.json(500).json({
      msg: "Contacte al administrador",
    });
  }
};

export const getConsumidor = async (req: Request, res: Response) => {
  const { idConsumidor } = req.params;

  try {
    const consumidor = await Consumidor.findByPk(idConsumidor);

    if (!consumidor) {
      return res.status(400).json({
        msg: `No existe un conusmidor con el id ${idConsumidor}`,
      });
    }

    res.json({
      consumidor,
    });
  } catch (error) {
    res.json({
      msg: `Contacta al administrador`,
    });
  }
};

export const saveConsumidor = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const consumidor = await Consumidor.create(body);

    res.json({
      consumidor,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Contacta al administrador",
    });
  }
};
