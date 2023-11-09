import { Request, Response } from "express";
import { usernameExist } from "@/validations/checkUsernameExist";
const validYoutube = async(id: string)=>{
  return true
}

export const checkYoutubeId = async (req: Request, res: Response, next: any) => {
  const songId = req.body.songId
  const validYoutubeId = await validYoutube(songId)
  if(validYoutubeId)return next()
  return res.status(400).send({message:"Username exist"})
}

export const checkYoutubeIdList = async (req: Request, res: Response, next: any) => {
  const songList: string[] = req.body.songList
  let count =0;
  songList.forEach( async(songId: string)=>{
    const validYoutubeId = await validYoutube(songId)
    if(!validYoutubeId) count+=1
  })
  if(!count)return next()
  return res.status(400).send({message:"Username exist"})
}