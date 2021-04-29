import { Request, Response } from "express";
import { json } from "sequelize/types";
import Proveedor from "../models/proveedor";

export const getProveedores = async (req: Request, res: Response) => {
  const proveedores = await Proveedor.findAll();

  res.json({
    proveedores,
  });
};

export const getProveedor = async (req: Request, res: Response) => {
  const { idProveedor } = req.params;
  const proveedor = await Proveedor.findByPk(idProveedor);
  try {
    if (!proveedor) {
      return res.status(400).json({
        msg: `No hay un proveedor con el id ${idProveedor}`,
      });
    }
    res.json({
      proveedor,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Contacte al administrador",
    });
  }
};

export const postProveedor = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const proveedor = await Proveedor.create(body);
    res.json({
      proveedor,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Contacte al administrador",
    });
  }
};

export const putProveedor = async (req: Request, res: Response) => {
  const { idProveedor } = req.params;
  const { body } = req;

  try {
    const proveedor = await Proveedor.findByPk(idProveedor);

    if (!proveedor) {
      return res.status(400).json({
        msg: `No existe un proveedor con el id ${idProveedor}`,
      });
    }

    await proveedor.update(body);
    res.json({
      proveedor,
    });
  } catch (error) {}
};

export const deleteProveedor = async (req: Request, res: Response) => {
  const { idProveedor } = req.params;

  try {
    const proveedor = await Proveedor.findByPk(idProveedor);

    if (!proveedor) {
      return res.status(400).json({
        msg: `No existe un proveedor con el id ${idProveedor}`,
      });
    }
    await proveedor.update({ estado: 0 });

    res.json({
      proveedor,
    });
  } catch (error) {
    res.json({
      msg: "Contacte al administrador",
    });
  }
};
