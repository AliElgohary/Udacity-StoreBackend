import client from "../database/database";
import { user } from "../../types/user.types";
import bcrypt from "bcrypt";
import config from "../configuration/config";
import  Jwt  from "jsonwebtoken";

class UserModel {
  async GetAllUsers(): Promise<user[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM users";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`cannot get all users due to ${err}`);
    }
  }

  async CreateUser(user: user): Promise<user> {
    try {
      const conn = await client.connect();
      const sql =
        "INSERT INTO users (username,email,userpassword) VALUES ($1,$2,$3) RETURNING *";
      const result = await conn.query(sql, [
        user.username,
        user.email,
        PassHash(user.userpassword),
      ]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot create user due to ${err}`);
    }
  }

  async DeleteUser(id: number): Promise<user> {
    try {
      const conn = await client.connect();
      const sql =
        "DELETE FROM users WHERE id=($1) RETURNING id, email, username";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot delete user due to ${err}`);
    }
  }

  async GetUserById(id: number): Promise<user> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM users WHERE id=($1)";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`cannot get user due to ${err}`);
    }
  }
}
const PassHash = (password: string): string => {
  const salt = Number(config.salt);
  const pepper = config.pepper;
  return bcrypt.hashSync(`${password}${pepper}`, salt);
};

export default UserModel;
