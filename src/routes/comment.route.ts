import express, { Request, Response, Application } from "express";
const commentRoute= express.Router({mergeParams: true});
import { makeCommentController } from "@/controllers/comment";
// should return {success: boolean, data? , message?}
commentRoute.get("/api/comment", makeCommentController);
// commentRoute.post("/api/comment", makeCommentController);
// commentRoute.put("/api/comment", makeCommentController);
// commentRoute.delete("/api/comment", makeCommentController);

export default commentRoute;
