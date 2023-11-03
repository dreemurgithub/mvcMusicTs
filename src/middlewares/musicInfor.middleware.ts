import express, { Request, Response, Application } from "express";

const musicMiddleware: Application = express();

musicMiddleware.use(async(req: Request, res: Response ,next)=>{
    next()
    
})

export default musicMiddleware;

// type: ? '/music'
// type: ? '/music'