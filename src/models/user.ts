import client from "../database";
import { user } from "../../types/user.types";

class UserModel {
  async GetAllUsers(user: user) {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM user;";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot get all users due to ${err}`);
    }
  }

  async CreateUser(user: user) {
    try {
      const conn = await client.connect();
      const sql =
        "INSERT INTO user(firstName,lastName,user_password) VALUES ($1,$2,$3);";
      const result = await conn.query(sql, [
        user.firstName,
        user.lastName,
        user.user_password,
      ]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot create user due to ${err}`);
    }
  }

  async DeleteUser(user: user) {
    try {
      const conn = await client.connect();
      const sql = "DELETE FROM user WHERE id=$1";
      const result = await conn.query(sql, [user.id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot delete user due to ${err}`);
    }
  }

  async GetUserById(user: user) {
    try {
      const conn = await client.connect();
      const sql = "SELECT FROM user WHERE id=$1";
      const result = await conn.query(sql, [user.id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot get user due to ${err}`);
    }
  }
  
  async UpdateUser(user: user) {
    try {
      const conn = await client.connect();
      const sql =
        "UPDATE user SET firstName=($1),lastName=($2) WHERE id=($3) RETURNING *";
      const result = await conn.query(sql, [user.id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot update user due to ${err}`);
    }
  }
}
