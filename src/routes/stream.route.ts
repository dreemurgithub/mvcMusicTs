import express, { Request, Response, Application } from "express";
const streamRoute: Application = express();
import streamController from "@/controllers/stream.controller";
import streamMiddleware from "@/middlewares/stream.middleware";
// should return {success: boolean, data? , message?}
streamRoute.get('/stream',streamMiddleware,streamController)
streamRoute.post('/stream',streamMiddleware,streamController)
streamRoute.put('/stream',streamMiddleware,streamController)
streamRoute.delete('/stream',streamMiddleware,streamController)


export default streamRoute
