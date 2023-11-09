import express, { Request, Response, Application } from "express";
import { playlistGetController } from "@/controllers/playlist";
import { requireAuth, authUpdate } from "@/middlewares/authentication";
const playlistRoute: Application = express();
import { schemaBodys, schemaQuerys } from "@/validations/validateGeneral";
import { validateBody } from "@/middlewares/validateBody";
import { validateQuery } from "@/middlewares/validateQuery";
import { validateUsernameExist } from "@/middlewares/custom.middleware";

// should return {success: boolean, data? , message?}
playlistRoute.get(
  "/playlist",
  validateQuery(schemaQuerys.pageCheck),
  validateQuery(schemaQuerys.playlistIdCheck),
  playlistGetController
);
playlistRoute.get("/playlist/top", playlistGetController);
playlistRoute.get("/playlist/new", playlistGetController);
playlistRoute.get(
  "/playlist/user",
  validateQuery(schemaQuerys.pageCheck),
  validateQuery(schemaQuerys.usernameCheck),
  playlistGetController
);
playlistRoute.put("/playlist", playlistGetController);
playlistRoute.delete("/playlist", playlistGetController);

export default playlistRoute;
