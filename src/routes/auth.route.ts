import express, { Application } from "express";
const authRoute: Application = express();
import { authControllerSignin, authControllerGet } from "@/controllers/auth/index.controller";
import { schemaBodys } from "@/validations/validateGeneral";
import { validateBody } from "@/middlewares/validateBody";
import { validateUsernameExist } from "@/middlewares/custom.middleware";
import { userNewController } from "@/controllers/user/index.controller";

authRoute.post("/auth/test", authControllerGet);

authRoute.post("/auth",validateBody(schemaBodys.usernameAndPassword), authControllerSignin);
authRoute.post(
  "/auth/new",
  validateBody(schemaBodys.nameAndPassword),
  validateBody(schemaBodys.usernameCheck),
  validateUsernameExist,
  userNewController
);

export default authRoute;
