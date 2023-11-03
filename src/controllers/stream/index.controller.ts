import express, { Request, Response, Application } from "express";
const streamController: Application = express();
import { streamMusic } from "@/models/stream/helper";
streamController.use(async(req: Request, res: Response )=>{
    const data = await streamMusic('Zasx9hjo4WY')
    return res.send(data)
})

export default streamController;
