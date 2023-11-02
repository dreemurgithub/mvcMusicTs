import express, { Request, Response, Application } from "express";
const streamValidate: Application = express();

streamValidate.use(async(req: Request, res: Response ,next)=>{
    next()
    
})

export default streamValidate;
