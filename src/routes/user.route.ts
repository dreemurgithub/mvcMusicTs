import express, { Request, Response, Application } from "express";
import {
  userNewController,
  userEditController,
  userDeleteController,
  userGetControllerId
} from "@/controllers/user/index.controller";
import { authUpdate,authMutateBody } from "@/middlewares/authentication";
const userRoute= express.Router({mergeParams: true});
import { schemaBodys,schemaParams } from "@/validations/validateGeneral";
import { validateBody } from "@/middlewares/validateBody";
import { validateParams } from "@/middlewares/validateParams";
import { validateUsernameExist } from "@/middlewares/custom.middleware";

// should return {success: boolean, data? , message?}
// userRoute.post(
//   "/user",
//   validateBody(schemaBodys.nameAndPassword),
//   validateBody(schemaBodys.usernameCheck),
//   validateUsernameExist,
//   userNewController
// );

userRoute.get(
  "/api/user/:id",
  validateParams(schemaParams.idCheck),
  userGetControllerId
);

userRoute.put(
  "/api/user",
  validateBody(schemaBodys.nameAndPassword),
  authMutateBody,
  userEditController
);
userRoute.delete("/api/user",  userDeleteController);

export default userRoute;
