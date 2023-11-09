import express, { Request, Response, Application } from "express";
import { authSignIn } from "@/models/auth";
import dotenv from "dotenv";
dotenv.config();
const secretKey = `${process.env.PASSWORD_KEY}`;

export const makeCommentController: Application = express();
export const readCommentController: Application = express();
export const editCommentController: Application = express();
export const deleteCommentController: Application = express();
makeCommentController.use(async (req: Request, res: Response) => {
    res.send('comment')
});

// readCommentController.use(async (req: Request, res: Response) => {});
// editCommentController.use(async (req: Request, res: Response) => {});
// deleteCommentController.use(async (req: Request, res: Response) => {});
