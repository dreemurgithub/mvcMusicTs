import express, { Request, Response, Application } from "express";
const userMiddleware: Application = express();

userMiddleware.use(async(req: Request, res: Response ,next)=>{
    next()
    
})

export default userMiddleware;

// type: [!password, !username, regex-password, regex-username] for post '/user'
// type: [!password, !username, regex-password, regex-username] for put '/user'