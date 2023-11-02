import express, { Request, Response, Application } from "express";
import musicInforValidate from "@/validations/musicInfor";

const musicMiddleware: Application = express();

musicMiddleware.use(async(req: Request, res: Response ,next)=>{
    next()
    
})

export default musicMiddleware;
