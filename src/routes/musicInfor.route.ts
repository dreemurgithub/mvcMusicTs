import express, { Request, Response, Application } from "express";
const musicInforRoute: Application = express();
import musicInforValidate from "@/validations/musicInfor";
import musicMiddleware from "@/middlewares/musicInfor";
import musicInforController from "@/controllers/musicInfor";
// should return {success: boolean, data? , message?}
musicInforRoute.get('/user',musicInforValidate,musicMiddleware,musicInforController)
musicInforRoute.post('/user',musicInforValidate,musicMiddleware,musicInforController)
musicInforRoute.put('/user',musicInforValidate,musicMiddleware,musicInforController)
musicInforRoute.delete('/user',musicInforValidate,musicMiddleware,musicInforController)

export default musicInforRoute
