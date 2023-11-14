import express, { Application } from "express";
const authRoute= express.Router({mergeParams: true});
import { authControllerSignin, authControllerGet } from "@/controllers/auth/index.controller";
import { schemaBodys } from "@/validations/validateGeneral";
import { validateBody } from "@/middlewares/validateBody";
import { validateUsernameExist } from "@/middlewares/custom.middleware";
import { userNewController } from "@/controllers/user/index.controller";

authRoute.post("/api/auth/test", authControllerGet);

authRoute.post("/api/auth",validateBody(schemaBodys.usernameAndPassword), authControllerSignin);
authRoute.post(
  "/api/auth/new",
  validateBody(schemaBodys.nameAndPassword),
  validateBody(schemaBodys.usernameCheck),
  validateUsernameExist,
  userNewController
);

export default authRoute;
