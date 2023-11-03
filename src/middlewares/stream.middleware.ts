import express, { Request, Response, Application } from "express";

const streamMiddleware: Application = express();

streamMiddleware.use(async(req: Request, res: Response ,next)=>{
    next()
    
})

export default streamMiddleware;

// type: ? '/music'
// type: ? '/music'