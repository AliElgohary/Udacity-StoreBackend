import client from "../database";
import { order } from "../../types/order.types";


class OrderModel {
   async CreateOrder(order:order){
    const conn = await client.connect();
    const sql = 
    
   }
}