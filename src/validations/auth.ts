import express, { Request, Response, Application } from "express";
const authValidate: Application = express();

authValidate.use(async(req: Request, res: Response, next)=>{
    next()
})

export default authValidate;
