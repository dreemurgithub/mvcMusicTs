import express, { Request, Response, Application } from "express";
const userRoute: Application = express();
import userController from "@/controllers/user";
import userMiddleware from "@/middlewares/user";
import userValidate from "@/validations/user";
// should return {success: boolean, data? , message?}
userRoute.get('/user',userValidate,userMiddleware,userController)
userRoute.post('/user',userValidate,userMiddleware,userController)
userRoute.put('/user',userValidate,userMiddleware,userController)
userRoute.delete('/user',userValidate,userMiddleware,userController)

export default userRoute
