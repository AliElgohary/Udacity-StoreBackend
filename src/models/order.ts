import client from "../database/database";
import { order } from "../../types/order.types";


class OrderModel {
   async CreateOrder(order:order){
    const conn = await client.connect();
    const sql = "INSERT INTO product(product_name,price) VALUSE ($1,$2) RETURNING *;";
    
    
   }
}