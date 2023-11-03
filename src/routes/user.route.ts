import express, { Request, Response, Application } from "express";
const userRoute: Application = express();
import {userController,getController} from "@/controllers/user/index.controller";
// should return {success: boolean, data? , message?}
userRoute.get("/user", getController);
userRoute.post("/user", userController);
userRoute.put("/user", userController);
userRoute.delete("/user", userController);

export default userRoute;
