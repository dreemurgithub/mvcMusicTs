import express, { Request, Response, Application } from "express";
import { authSignIn } from "@/models/auth";
import dotenv from "dotenv";
dotenv.config();
const secretKey = `${process.env.PASSWORD_KEY}`;

export const makeCommentController= express.Router({mergeParams: true});
export const readCommentController= express.Router({mergeParams: true});
export const editCommentController= express.Router({mergeParams: true});
export const deleteCommentController= express.Router({mergeParams: true});
makeCommentController.use(async (req: Request, res: Response) => {
    res.send('comment')
});

// readCommentController.use(async (req: Request, res: Response) => {});
// editCommentController.use(async (req: Request, res: Response) => {});
// deleteCommentController.use(async (req: Request, res: Response) => {});
