import express, { Request, Response, Application } from "express";
const userRoute: Application = express();
import userController from "@/controllers/user/index.controller";
import userMiddleware from "@/middlewares/user.middleware";
// should return {success: boolean, data? , message?}
userRoute.get('/user',userMiddleware,userController)
userRoute.post('/user',userMiddleware,userController)
userRoute.put('/user',userMiddleware,userController)
userRoute.delete('/user',userMiddleware,userController)

export default userRoute
