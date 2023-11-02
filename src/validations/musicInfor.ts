import express, { Request, Response, Application } from "express";
const musicInforValidate: Application = express();

musicInforValidate.use(async(req: Request, res: Response ,next)=>{
    next()
    
})

export default musicInforValidate;
