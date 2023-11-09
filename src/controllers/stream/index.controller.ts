import express, { Request, Response, Application } from "express";
import { streamMusic } from "@/models/stream/helper";

export const streamController: Application = express();
export const streamControllerpost: Application = express();
streamController.use(async(req: Request, res: Response )=>{
    const songId = req.query.songId as string
    const result = await streamMusic(songId)
    if (result.success) return res.status(200).send(result.data);
    else return res.status(400).send({message: result.message});
})
streamControllerpost.use(async(req: Request, res: Response )=>{
    res.send('hello')
})
