import express, { Request, Response, Application } from "express";
import { regexPassword, regexUserName } from "./index.validate";
const authValidate: Application = express();

authValidate.use(async(req: Request, res: Response, next)=>{
    next()
})

export default authValidate;
