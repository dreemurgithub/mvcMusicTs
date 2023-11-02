import express, { Request, Response, Application } from "express";
const authMiddleware: Application = express();

authMiddleware.use(async(req: Request, res: Response ,next)=>{
    next()
})

export default authMiddleware;
