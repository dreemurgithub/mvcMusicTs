import express, { Request, Response, Application } from "express";
import {userNewController,userEditController} from "@/controllers/user/index.controller";
const likeRoute= express.Router({mergeParams: true});
import { schemaBodys } from "@/validations/validateGeneral";
import { validateBody } from "@/middlewares/validateBody";
import { validateUsernameExist } from "@/middlewares/user.middleware";


export default likeRoute;