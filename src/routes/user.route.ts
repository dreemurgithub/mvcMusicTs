import express, { Request, Response, Application } from "express";
import {
  userNewController,
  userEditController,
  getController,
} from "@/controllers/user/index.controller";
import { authUpdate } from "@/middlewares/authentication";
const userRoute= express.Router({mergeParams: true});
import { schemaBodys } from "@/validations/validateGeneral";
import { validateBody } from "@/middlewares/validateBody";
import { validateUsernameExist } from "@/middlewares/custom.middleware";

// should return {success: boolean, data? , message?}
// userRoute.post(
//   "/user",
//   validateBody(schemaBodys.nameAndPassword),
//   validateBody(schemaBodys.usernameCheck),
//   validateUsernameExist,
//   userNewController
// );
userRoute.put(
  "/user",
  validateBody(schemaBodys.nameAndPassword),
  authUpdate,
  userEditController
);
userRoute.delete("/user", authUpdate, userNewController);

export default userRoute;
