import { NextFunction, Request, Response } from "express";
import OrderModel from "../models/order";

export const orderModel = new OrderModel();
export const allOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await orderModel.getOrders();
    if (!orders) return;
    res.send({
      status: 200,
      message: "All orders returned successfully",
      data: orders,
    });
  } catch (error) {
    throw new Error(`cannot get all products due to ${error}`);
  }
};

export const CreateOrder = async (req: Request, res: Response) => {
  try {
    const { status, userId } = req.body;
    const createdorder = await orderModel.CreateOrder(userId, status);
    if (!createdorder) return;
    res.send({
      status: 200,
      message: "All products returned successfully",
      data: { ...createdorder },
    });
  } catch (error) {
    throw new Error(`cannot create order due to ${error}`);
  }
};

export const GetOneOrder = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id);
    const userOrder = await orderModel.UserOrder(userId);
    if (!userOrder) return;
    res.send({
      status: 200,
      message: "The user order returned successfully",
      data: { ...userOrder },
    });
  } catch (error) {
    throw new Error(`cannot return order due to ${error}`);
  }
};
export const DeleteOrder = async (req: Request, res: Response) => {
    try {
      const userId = Number(req.params.id);
      const deletedorder = await orderModel.DeleteOrder(userId);
      if (!deletedorder) return;
      res.send({
        status: 200,
        message: "order deleted successfully",
        data: { ...deletedorder },
      });
    } catch (error) {
      throw new Error(`cannot delete order due to ${error}`);
    }
  };
