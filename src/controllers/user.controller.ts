import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user";


const userModel = new UserModel();

export const GetAllUsers = async (_req: Request,res: Response)=>{
  try {
    const getUsers = await userModel.GetAllUsers();
    if (! GetAllUsers) return;
    res.send({
        status: 200,
        message: "All users returned successfully",
        data: getUsers,
      });
  } catch (error) {
    throw new Error(`cannot get all user due to ${error}`);
  }
};

export const CreateUser = async (req: Request, res: Response) => {
  try {
    const createdUser = await userModel.CreateUser(req.body);
    if (!CreateUser) return;
    res.send({
      status: 200,
      message: "user created successfully",
      data: { ...createdUser },
    });
  } catch (error) {
    throw new Error(`Can't create new user due to error: ${error}`);
  }
};
export const DeleteUser = async (req: Request, res: Response)=>{
    try {
      const userId = parseInt(req.params.id);
        const deleteuser = await userModel.DeleteUser(userId);
        if (! DeleteUser) return;
        res.send({
            status: 200,
            message: 'user deleted',
            data: { ...deleteuser}
        })        
    } catch (error) {
        throw new Error(`cannot delete user ${error}`)
    }
}
export const GetUserById = async (req: Request, res: Response)=>{
  try {
    const userId = parseInt(req.params.id);
      const getuserbyid = await userModel.GetUserById(userId);
      if (! GetUserById) return;
      res.send({
          status: 200,
          message: 'got user',
          data: { ...getuserbyid}
      })        
  } catch (error) {
      throw new Error(`cannot delete user ${error}`)
  }
}
