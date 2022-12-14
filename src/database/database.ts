import config from "../configuration/config";
import { Pool } from "pg";

const client = new Pool({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
  port: config.dbport,
});

export default client;
