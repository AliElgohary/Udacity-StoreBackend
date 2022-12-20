import dotev from "dotenv";
dotev.config();

const {
  PORT,
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  SALT,
  PEPPER,
} = process.env;

export default {
  port: PORT,
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  salt: SALT,
  pepper: PEPPER,
};
