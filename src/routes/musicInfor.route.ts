import express, { Request, Response, Application } from "express";
const musicInforRoute: Application = express();
import priviledgeMiddleware from "@/middlewares";
import musicInforController from "@/controllers/musicInfor/index.controller";
// should return {success: boolean, data? , message?}
musicInforRoute.get("/music", priviledgeMiddleware, musicInforController);
// musicInforRoute.post("/music", priviledgeMiddleware, musicInforController);
// musicInforRoute.put("/music", priviledgeMiddleware, musicInforController);
// musicInforRoute.delete("/music", priviledgeMiddleware, musicInforController);

export default musicInforRoute;
