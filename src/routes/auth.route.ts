import express, { Request, Response, Application } from "express";
const authRoute: Application = express();
import authController from "@/controllers/auth.controller";
import authMiddleware from "@/middlewares/auth.middleware";
// should return {success: boolean, data? , message?}
// authRoute.get('/auth',authMiddleware,authController)
authRoute.post('/auth',authMiddleware,authController)
// authRoute.put('/auth',authMiddleware,authController)
authRoute.delete('/auth',authMiddleware,authController)

export default authRoute