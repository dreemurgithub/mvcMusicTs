import express, { Request, Response, Application } from "express";
import {userNewController,userEditController,getController} from "@/controllers/user/index.controller";
import {requireAuth, authUpdate} from "@/middlewares/authentication";
const roomRoute: Application = express();
import { schemaBodys,schemaQuerys } from "@/validations/validateGeneral";
import { validateBody } from "@/middlewares/validateBody";
import { validateUsernameExist } from "@/middlewares/custom.middleware";

// should return {success: boolean, data? , message?}
// roomRoute.post("/user", validateBody(schemas.nameAndPassword),validateUsernameExist, userNewController);
// roomRoute.put("/user", requireAuth,validateBody(schemas.nameAndPassword),authUpdate, userEditController);
// roomRoute.delete("/user",requireAuth ,authUpdate,userNewController);

export default roomRoute;