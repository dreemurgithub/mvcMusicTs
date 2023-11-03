import express, { Request, Response, Application } from "express";
const musicInforRoute: Application = express();
import musicMiddleware from "@/middlewares/musicInfor.middleware";
import musicInforController from "@/controllers/musicInfor.controller";
// should return {success: boolean, data? , message?}
musicInforRoute.get('/music',musicMiddleware,musicInforController)
musicInforRoute.post('/music',musicMiddleware,musicInforController)
musicInforRoute.put('/music',musicMiddleware,musicInforController)
musicInforRoute.delete('/music',musicMiddleware,musicInforController)

export default musicInforRoute
