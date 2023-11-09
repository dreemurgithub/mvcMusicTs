import express, { Request, Response, Application } from "express";
const musicInforRoute: Application = express();
import {musicInforController} from "@/controllers/musicInfor/index.controller";
import { schemaQuerys } from "@/validations/validateGeneral";
import { validateQuery } from "@/middlewares/validateQuery";
// should return {success: boolean, data? , message?}
musicInforRoute.get("/music",validateQuery(schemaQuerys.pageCheck),validateQuery(schemaQuerys.searchCheck), musicInforController);
// musicInforRoute.post("/music" , musicInforController);
// musicInforRoute.put("/music" , musicInforController);
// musicInforRoute.delete("/music" , musicInforController);

export default musicInforRoute;
