import express, { Request, Response, Application } from "express";
const userValidate: Application = express();

userValidate.use(async(req: Request, res: Response ,next)=>{
    next()
    
})

export default userValidate;
