import express, { Request, Response, Application } from "express";
const authRoute: Application = express();
import authController from "@/controllers/auth";
import authValidate from "@/validations/auth";
import authMiddleware from "@/middlewares/auth";
// should return {success: boolean, data? , message?}
authRoute.get('/auth',authValidate,authMiddleware,authController)
authRoute.post('/auth',authValidate,authMiddleware,authController)
authRoute.put('/auth',authValidate,authMiddleware,authController)
authRoute.delete('/auth',authValidate,authMiddleware,authController)

export default authRoute