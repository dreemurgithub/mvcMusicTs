import express, { Request, Response, Application } from "express";
const streamController: Application = express();
import { streamMusic } from "@/models/stream/helper";
streamController.use(async(req: Request, res: Response )=>{
    const listen = req.query.listen as string
    const data = await streamMusic(listen)
    return res.send(data)
})

export default streamController;
