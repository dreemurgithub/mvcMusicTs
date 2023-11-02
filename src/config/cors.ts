import cors from "cors";
import express, { Request, Response, Application } from "express";

const configCors: Application = express();

configCors.use((req: Request, res: Response, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
configCors.use(cors({ origin: "*" }));
export default configCors;
