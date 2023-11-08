import express, { Request, Response, Application } from "express";
const streamController: Application = express();
import { streamMusic } from "@/models/stream/helper";
streamController.use(async(req: Request, res: Response )=>{
    const listen = req.query.listen as string
    const result = await streamMusic(listen)
    if (result.success) return res.status(200).send(result.data);
    else return res.status(400).send({message: result.message});
})

export default streamController;
