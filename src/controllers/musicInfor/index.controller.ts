import express, { Request, Response, Application } from "express";
import { musicYoutubeSearch } from "@/models/musicInfor";

export const musicInforController: Application = express();

musicInforController.use(async (req: Request, res: Response) => {
  const { search, page } = req.query;
  const check =
    search &&
    page &&
    typeof search == "string" &&
    typeof page == "string" &&
    parseInt(page);
  if (check) {
    const result = await musicYoutubeSearch({ search, page: parseInt(page) });
    if (result.success) return res.status(201).send(result.data);
    else return res.status(400).send({ message: result.message });
  }
  res.status(400).send({ message: "Something wrong with searching music" });
});
