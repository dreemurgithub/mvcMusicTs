import express, { Request, Response, Application } from "express";
const streamRoute: Application = express();
import streamController from "@/controllers/stream.controller";
import streamMiddleware from "@/middlewares/stream.middleware";
// should return {success: boolean, data? , message?}
streamRoute.get('/user',streamMiddleware,streamController)
streamRoute.post('/user',streamMiddleware,streamController)
streamRoute.put('/user',streamMiddleware,streamController)
streamRoute.delete('/user',streamMiddleware,streamController)


export default streamRoute
