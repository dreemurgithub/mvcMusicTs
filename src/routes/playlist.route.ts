import express, { Request, Response, Application } from "express";
import { playlistGetController,playlistNewController } from "@/controllers/playlist/index.controller";
import { requireAuth, authUpdate ,authMutate} from "@/middlewares/authentication";
const playlistRoute: Application = express();
import { schemaBodys, schemaQuerys } from "@/validations/validateGeneral";
import { validateBody } from "@/middlewares/validateBody";
import { validateQuery } from "@/middlewares/validateQuery";
import { validateUsernameExist } from "@/middlewares/custom.middleware";

// should return {success: boolean, data? , message?}
playlistRoute.get(
  "/playlist",
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
playlistRoute.post("/playlist",authMutate,validateBody(schemaBodys.urlCheck),validateBody(schemaBodys.playlistCheck), playlistNewController);

// playlistRoute.put("/playlist", playlistGetController);
// playlistRoute.delete("/playlist", playlistGetController);

export default playlistRoute;
