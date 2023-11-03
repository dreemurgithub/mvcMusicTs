import express, { Application } from "express";
const authRoute: Application = express();
import priviledgeMiddleware from "@/middlewares";
import {
  authControllerSignin,
  authControllerSignOut,
} from "@/controllers/auth/index.controller";
import authMiddleware from "@/middlewares/auth.middleware";
// should return {success: boolean, data? , message?}
// authRoute.get("/auth", authMiddleware);
authRoute.post(
  "/auth",
  priviledgeMiddleware,
  authMiddleware,
  authControllerSignin
);
// authRoute.put("/auth", priviledgeMiddleware);
authRoute.delete("/auth", priviledgeMiddleware, authControllerSignOut);

export default authRoute;
