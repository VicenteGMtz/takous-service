import { Request, Response } from "express";
import Compra from "../models/compra";

export const getCompras = async (req: Request, res: Response) => {
  const compras = await Compra.findAll();

  try {
    if (!compras) {
      return res.status(400).json({
        msg: "No hay productos en la base de datos",
      });
    } else {
      res.json({
        compras,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Contacta al administrador",
    });
  }
};

export const getCompra = async (req: Request, res: Response) => {
  const { idCompra } = req.params;

  try {
    const compra = await Compra.findByPk(idCompra);

    if (!compra) {
      return res.status(400).json({
        msg: `No se encontró una compra con el id ${idCompra}`,
      });
    } else {
      res.json({
        compra,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Contacta al administrador",
    });
  }
};

export const postCompra = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const compra = await Compra.create(body);

    res.json({
      compra,
    });
  } catch (error) {
    res.json({
      msg: "Contacte al administrador",
    });
  }
};

export const putCompra = async (req: Request, res: Response) => {
  const { body } = req;
  const { idCompra } = req.params;

  try {
    const compra = await Compra.findByPk(idCompra);

    if (!compra) {
      return res.status(400).json({
        msg: `No se encontró una compra con el id ${idCompra}`,
      });
    }
    await compra.update(body);
    res.json({
      compra,
    });
  } catch (error) {
    res.json({
      msg: "Contacte al administrador",
    });
  }
};

export const deleteCompra = async (req: Request, res: Response) => {
  const { idCompra } = req.params;
  try {
    const compra = await Compra.findByPk(idCompra);
    if (!compra) {
      return res.json({
        msg: `No se encontró una compra con el id idCompra`,
      });
    }
    await compra.update({ estado: 0 });
    res.json({
      compra,
    });
  } catch (error) {
    res.json({
      msg: "Contacte el administrador",
    });
  }
};
