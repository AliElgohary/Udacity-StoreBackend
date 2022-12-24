import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import config from "./configuration/config";
import appRouter from "./router/router";
import db from "./database/database";

const app: express.Application = express();
const port = config.port || 3000;
const address: string = `0.0.0.0:${port}`;

app.use(bodyParser.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

db.connect().then((client) => {
  return client
    .query("SELECT NOW()")
    .then((res) => {
      client.release();
      console.log(res.rows);
    })
    .catch((err) => {
      client.release();
      console.log(err.stack);
    });
});

app.use("/api", appRouter);

app.listen(port, () => {
  console.log(`starting app on: ${address}`);
});

export default app;
