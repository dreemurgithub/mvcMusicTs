import express, { Request, Response, Application } from "express";
import userValidate from "@/validations/user";
const userMiddleware: Application = express();

userMiddleware.use(async(req: Request, res: Response ,next)=>{
    next()
    
})

export default userMiddleware;
