import dotev from "dotenv";
dotev.config();

const {
  PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_DBPort,
  NODE_ENV,
  DB_HOST,
  SALT,
  PEPPER,
  TOKEN,
} = process.env;

export default {
  port: PORT,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dbport: Number(POSTGRES_DBPort),
  NODE_ENV:NODE_ENV,
  host: DB_HOST,
  salt: SALT,
  pepper: PEPPER,
  token: TOKEN
};
