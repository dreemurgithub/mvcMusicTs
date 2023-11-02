import express, { Request, Response, Application } from "express";
import authValidate from "@/validations/auth.validate";
const authMiddleware: Application = express();

authMiddleware.use(async(req: Request, res: Response ,next)=>{
    if(req.method==='POST' && !req.session.userId) authMiddleware.use(authValidate)
    if(req.method==='DELETE' && req.session.userId) return next()
    res.status(400).send({success: false, message:'Bad Request'})
})

export default authMiddleware;
