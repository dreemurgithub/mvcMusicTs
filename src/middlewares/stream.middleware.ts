import express, { Request, Response, Application } from "express";
import streamValidate from "@/validations/stream.validate";

const streamMiddleware: Application = express();

streamMiddleware.use(async(req: Request, res: Response ,next)=>{
    next()
    
})

export default streamMiddleware;
