import { Request, Response } from "express";
import Producto from "../models/producto";

export const getProductos = async (req: Request, res: Response) => {
  const productos = await Producto.findAll();
  res.json({
    productos,
  });
};

export const getProducto = async (req: Request, res: Response) => {
  const { codigo } = req.params;
  const producto = await Producto.findByPk(codigo);

  if (producto) {
    res.json({
      producto,
    });
  } else {
    res.json({
      msg: `No existe un producto con el id ${codigo}`,
    });
  }
};

export const postProducto = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const producto = await Producto.create(body);

    res.json({
      producto,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Contacta al administrador",
    });
  }
};

export const putProducto = async (req: Request, res: Response) => {
  const { codigo } = req.params;
  const { body } = req;

  try {
    const producto = await Producto.findByPk(codigo);

    if (!producto) {
      return res.status(500).json({
        msg: `No existe un producto con el código ${codigo}`,
      });
    }
    await producto.update(body);
    res.json({
      producto,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Contacte al administrador",
    });
  }
};

export const deleteProducto = async (req: Request, res: Response) => {
  const { codigo } = req.params;

  try {
    const producto = await Producto.findByPk(codigo);

    if (!producto) {
      return res.status(500).json({
        msg: `No existe el producto con el código ${codigo}`,
      });
    }
    await producto.update({ estado: 0 });

    res.json({
      producto,
    });
  } catch (error) {
    res.status(500).json({
      msg: `Contacta al administrador`,
    });
  }
};
