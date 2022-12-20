import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user";

const userModel = new UserModel();

export const GetAllUsers = async (res: Response, req: Request) => {
  try {
    const getUsers = await userModel.GetAllUsers();
    if (! getUsers) return;
    res.send({ 
        status: 200,
        message: 'all users returned',
        data: getUsers, 
    });
  } catch (error) {
    throw new Error(`cannot get all user due to ${error}`);
  }
};

export const CreateUser = async (res: Response, req : Request) => {
    try {
        const createuser = await userModel.CreateUser(req.body);
        if (! createuser) return;
        res.send({
            status: 200,
            message: 'user created',
            data: { ...createuser}
        }) 
    } catch (error) {
        throw new Error(`cannot create user ${error}`);
    }
}
export const DeleteUser = async (res: Response, req: Request) => {
    try {
        const deleteuser = await userModel.DeleteUser(req.body);
        if (! deleteuser) return;
        res.send({
            status: 200,
            message: 'user created',
            data: { ...deleteuser}
        })        
    } catch (error) {
        throw new Error(`cannot delete user ${error}`)
    }
}
export const GetUserById = async (res: Response, req: Request) => {
    try {
        const getbyid = await userModel.GetUserById(req.body);
        if (! getbyid) return;
        res.send({
            status: 200,
            message: 'user created',
            data: {... getbyid}
        })        
    } catch (error) {
        throw new Error(`cannot get user ${error}`)
    }
}
export const UpdateUser = async (res: Response, req: Request) => {
    try {
        const updateuser = await userModel.UpdateUser(req.body);
        if (! updateuser) return;
        res.send({
            status: 200,
            message: 'user created',
            data: {... updateuser}
        })        
    } catch (error) {
        throw new Error(`cannot update user ${error}`)
    }
}