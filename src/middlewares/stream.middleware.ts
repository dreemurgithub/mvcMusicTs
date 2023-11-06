import express, { Request, Response, Application } from "express";

const streamMiddleware: Application = express();

streamMiddleware.use(async(req: Request, res: Response ,next)=>{
    const listen = req.query.listen as string
    if(listen) next()
    else return res.status(400).send({message: "Bad Request"})
    
})

export default streamMiddleware;

// type: ? '/music'
// type: ? '/music'