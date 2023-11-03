import express, { Request, Response, Application } from "express";
import configApp from "./config";
import expressRoute from "./routes/index.route";
import { makeSessionTables,createTableConnect } from "@/config/helper/startup";
import { playlistRepository } from "./config/database/typeorm";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(configApp)
app.use(expressRoute)

app.listen(PORT, async () => {
  console.log(`PORT ${PORT} is listening`);
  makeSessionTables()
  createTableConnect()
  
});
