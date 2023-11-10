import express, { Request, Response, Application } from "express";
import {
  playlistGetController,
  playlistNewController,
  playlistOwnerController
} from "@/controllers/playlist/index.controller";
import {
  requireAuth,
  authUpdate,
  authMutate,
} from "@/middlewares/authentication";
const playlistRoute = express.Router({mergeParams: true});
import {
  schemaBodys,
  schemaQuerys,
  schemaParams,
} from "@/validations/validateGeneral";
import { validateBody } from "@/middlewares/validateBody";
import { validateQuery } from "@/middlewares/validateQuery";
import { validateParams } from "@/middlewares/validateParams";
import { validateUsernameExist } from "@/middlewares/custom.middleware";

// should return {success: boolean, data? , message?}
playlistRoute.get(
  "/playlist",
  validateQuery(schemaQuerys.playlistIdCheck),
  playlistGetController
);
playlistRoute.get("/playlist/top", playlistGetController);
playlistRoute.get(
  "/playlist/:owner/:sort",
  validateParams(schemaParams.ownerCheck),
  validateParams(schemaParams.sortCheck),
  validateQuery(schemaQuerys.pageCheck),
  playlistOwnerController
);

playlistRoute.post(
  "/playlist",
  authMutate,
  validateBody(schemaBodys.urlCheck),
  validateBody(schemaBodys.playlistCheck),
  playlistNewController
);

// playlistRoute.put("/playlist", playlistGetController);
// playlistRoute.delete("/playlist", playlistGetController);

export default playlistRoute;
