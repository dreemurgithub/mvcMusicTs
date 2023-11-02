import express, { Request, Response, Application } from "express";
const musicInforRoute: Application = express();
import musicMiddleware from "@/middlewares/musicInfor";
import musicInforController from "@/controllers/musicInfor";
// should return {success: boolean, data? , message?}
musicInforRoute.get('/user',musicMiddleware,musicInforController)
musicInforRoute.post('/user',musicMiddleware,musicInforController)
musicInforRoute.put('/user',musicMiddleware,musicInforController)
musicInforRoute.delete('/user',musicMiddleware,musicInforController)

export default musicInforRoute
