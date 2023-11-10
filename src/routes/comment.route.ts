import express, { Request, Response, Application } from "express";
const commentRoute= express.Router({mergeParams: true});
import { makeCommentController } from "@/controllers/comment";
// should return {success: boolean, data? , message?}
commentRoute.get("/comment", makeCommentController);
// commentRoute.post("/comment", makeCommentController);
// commentRoute.put("/comment", makeCommentController);
// commentRoute.delete("/comment", makeCommentController);

export default commentRoute;
