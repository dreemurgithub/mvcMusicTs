import express, { Request, Response, Application } from "express";
import {userNewController,userEditController,getController} from "@/controllers/user/index.controller";
import {userMiddlewareNew, userMiddlewareUpdate} from "@/middlewares/user.middleware";
import priviledgeMiddleware from "@/middlewares";
const userRoute: Application = express();

// should return {success: boolean, data? , message?}
userRoute.post("/user", userNewController);
userRoute.put("/user", priviledgeMiddleware,userMiddlewareNew ,userEditController);
userRoute.delete("/user",priviledgeMiddleware ,userMiddlewareUpdate,userNewController);

export default userRoute;