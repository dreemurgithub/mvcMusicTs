import express, { Request, Response, Application } from "express";
// import { startSession } from "./config/postgres";
// import {
//   userPlaylist,
//   songsinPlaylist,
//   addSongToPlaylist,
//   makeUserDir,
//   makePlaylist,
// } from "./model/helper/playlist";
// import configApp from "./config";
// import controller from "./controller";
const app: Application = express();
// app.use(configApp);
// app.use(controller);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`PORT ${PORT} is listening`);
//   startSession();
});
