import client from "../database/database";
import { order } from "../types/order.types";

class OrderModel{
    async getOrders(): Promise<order[]>{
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM orders';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (error) {
            throw new Error(`cant get orders due to ${error}`)
        }
    }
    async CreateOrder(userId: number, status: string): Promise<order>{
        try {
            const conn = await client.connect();
            const sql = 'INSERT INTO orders(userId, status) VALUES ($1,$2) RETURNING *';
            const result = await conn.query(sql, [userId, status]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`cant create order due to ${error}`)
        }
    }
    async UserOrder(userId: number): Promise<order[]>{
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM orders WHERE userId=($1)';
            const result = await conn.query(sql, [userId]);
            conn.release();
            return result.rows;
        } catch (error) {
            throw new Error(`cant create order due to ${error}`)
        }
    }
    async DeleteOrder(userId: number): Promise<order>{
        try {
            const conn = await client.connect();
            const sql = 'DELETE FROM orders WHERE userid=($1)';
            const result = await conn.query(sql, [userId]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error(`cant create order due to ${error}`)
        }
    }
}
export default OrderModel;