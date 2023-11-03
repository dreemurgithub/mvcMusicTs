import express, { Request, Response, Application } from "express";
const streamRoute: Application = express();
import streamController from "@/controllers/stream/index.controller";
import streamMiddleware from "@/middlewares/stream.middleware";
import priviledgeMiddleware from "@/middlewares";
// should return {success: boolean, data? , message?}
streamRoute.get("/stream", priviledgeMiddleware, streamController);
streamRoute.get("/stream/:id", priviledgeMiddleware, streamController);
// streamRoute.post('/stream',streamMiddleware,streamController)
// streamRoute.put('/stream',streamMiddleware,streamController)
// streamRoute.delete('/stream',streamMiddleware,streamController)

export default streamRoute;
