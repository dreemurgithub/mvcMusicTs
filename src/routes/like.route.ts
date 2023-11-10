import express, { Request, Response, Application } from "express";
import {userNewController,userEditController,getController} from "@/controllers/user/index.controller";
import { authUpdate} from "@/middlewares/authentication";
const likeRoute= express.Router({mergeParams: true});
import { schemaBodys } from "@/validations/validateGeneral";
import { validateBody } from "@/middlewares/validateBody";
import { validateUsernameExist } from "@/middlewares/custom.middleware";

// should return {success: boolean, data? , message?}
// likeRoute.post("/user", validateBody(schemaBodys.nameAndPassword),validateUsernameExist, userNewController);
// likeRoute.put("/user", validateBody(schemaBodys.nameAndPassword),authUpdate, userEditController);
// likeRoute.delete("/user",authUpdate,userNewController);

export default likeRoute;