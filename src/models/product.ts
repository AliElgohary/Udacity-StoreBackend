import client from "../database";
import { product } from "../../types/product.types";

export class ProuctModel {
  async getAllProducts(product: product) {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM product";
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
        "INSERT INTO product(product_name,price) VALUSE ($1,$2) RETURNING *;";
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

  async DeleteProduct(product: product) {
    try {
      const conn = await client.connect();
      const sql = "DELETE FROM product WHERE id=1$;";
      const result = await conn.query(sql, [product.id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot delete user ${err}`);
    }
  }
}
