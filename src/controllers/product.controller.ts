import { NextFunction, Request, Response } from "express";
import ProuctModel from "../models/product";


export const prouctModel = new ProuctModel();
export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const getProducts = await prouctModel.getAllProducts();
    if (!getProducts) return;
    res.send({
      status: 200,
      message: "All products returned successfully",
      data: getProducts,
    });
  } catch (error) {
    throw new Error(`cannot get all products due to ${error}`);
  }
};

export const CreateProduct = async (req: Request, res: Response) => {
  try {
    const createdproduct = await prouctModel.CreateProduct(req.body);
    if (!createdproduct) return;
    res.send({
      status: 200,
      message: "All products returned successfully",
      data: { ...createdproduct },
    });
  } catch (error) {
    throw new Error(`cannot get all products due to ${error}`);
  }
};
export const getProductByID = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id);
    const getbyid = await prouctModel.getProductByID(userId);
    if (!getbyid) return;
    res.send({
      status: 200,
      message: "got product",
      data: { ...getbyid },
    });
  } catch (error) {
    throw new Error(`cannot get user ${error}`);
  }
};
export const DeleteProduct = async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.id);
      const deletedProduct = await prouctModel.DeleteProduct(userId);
      if (!deletedProduct) return;
      res.send({
        status: 200,
        message: "product deleted",
        data: { ...deletedProduct },
      });
    } catch (error) {
      throw new Error(`cannot get user ${error}`);
    }
  };