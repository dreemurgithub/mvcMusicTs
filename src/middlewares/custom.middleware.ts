import { Request, Response } from "express";
import { usernameExist } from "@/validations/checkUsernameExist";

export const validateUsernameExist = async (req: Request, res: Response, next: any) => {
    const username = req.body.username;
    const checkExist = await usernameExist(username)
    if(checkExist) return res.status(400).send({message:"Username exist"})
    return next()
  };

