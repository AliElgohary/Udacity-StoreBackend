import client from "../database/database";
import { product } from "../../types/product.types";

export class ProuctModel {
  async getAllProducts(): Promise<product[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM products";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot get all products ${err}`);
    }
  }

  async CreateProduct(product: product) {
    try {
      const conn = await client.connect();
      const sql =
        "INSERT INTO products(product_name,price) VALUES ($1,$2) RETURNING *";
      const result = await conn.query(sql, [
        product.product_name,
        product.price,
      ]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot get products ${err}`);
    }
  }

  async getProductByID(id: number) {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM products WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot get products ${err}`);
    }
  }


  async DeleteProduct(id: number) {
    try {
      const conn = await client.connect();
      const sql = "DELETE FROM products WHERE id=($1) RETURNING id, product_name, price";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot delete user ${err}`);
    }
  }
}
export default ProuctModel;
