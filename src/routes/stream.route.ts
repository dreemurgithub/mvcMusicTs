import express, { Request, Response, Application } from "express";
const streamRoute: Application = express();
import streamController from "@/controllers/stream";
import streamMiddleware from "@/middlewares/stream";
import streamValidate from "@/validations/stream";
// should return {success: boolean, data? , message?}
streamRoute.get('/user',streamValidate,streamMiddleware,streamController)
streamRoute.post('/user',streamValidate,streamMiddleware,streamController)
streamRoute.put('/user',streamValidate,streamMiddleware,streamController)
streamRoute.delete('/user',streamValidate,streamMiddleware,streamController)


export default streamRoute
