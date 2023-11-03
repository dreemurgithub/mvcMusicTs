import express, { Request, Response, Application } from "express";
import authValidate from "@/validations/auth.validate";
const middleware: Application = express();
// allow [post auth to signin,post to user]  if !req.session.userId

// allow [put to user, put to playlist(make later), put to comment] by req.session.userId === user.id
// allow [delete comment] by req.session.userId === user.id

// allow [get to user(as room), get query to search] if req.session.userId
// allow [get params id to stream, get query to search] if req.session.userId
// allow [delete sign out] if req.session.userId

// middleware handle bad request + un-authorized 
// controller only return for data/bad request
middleware.use(async(req: Request, res: Response ,next)=>{
    next()
})

export default middleware;
