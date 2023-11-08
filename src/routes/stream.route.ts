import express, { Request, Response, Application } from "express";
const streamRoute: Application = express();
import streamController from "@/controllers/stream/index.controller";
import {requireAuth} from "@/middlewares/authentication";
// should return {success: boolean, data? , message?}
// streamRoute.get("/stream", priviledgeMiddleware, streamController);
streamRoute.get("/stream", requireAuth, streamController);

// streamRoute.post('/stream',streamMiddleware,streamController)
// streamRoute.put('/stream',streamMiddleware,streamController)
// streamRoute.delete('/stream',streamMiddleware,streamController)

export default streamRoute;
