import Joi from "joi";
import { regexPassword } from "./regex.validate";


export const schemaBodys = {
  usernameAndPassword: Joi.object().keys({
    username: Joi.string().max(32).min(5).required(), // okay
    password: Joi.string().regex(regexPassword), // okay
  }),
  nameAndPassword: Joi.object().keys({
    name: Joi.string().required().max(32), // okay
    password: Joi.string().regex(regexPassword), // okay
  }),
  usernameCheck: Joi.object().keys({
    username: Joi.string().required().max(32).min(5),
  }),
  songIdCheck: Joi.object().keys({
    songId: Joi.string().required(), //  need aditional check if the id is youtubeId
  }),
  songListCheck: Joi.object().keys({
    songList: Joi.array().items(Joi.string()).required(), //  need aditional check all the id is youtubeId
  }),
  contentCheck: Joi.object().keys({
    content: Joi.string().required(), //  need aditional check if the id is youtubeId
  }),
};

export const schemaQuerys = {
  pageCheck: Joi.object().keys({
    page: Joi.number().required(), // okay
  }),
  usernameCheck: Joi.object().keys({
    username: Joi.string().required().max(32).min(5),
  }),
  userIdCheck: Joi.object().keys({
    userId: Joi.number().required(),
  }),
  playlistIdCheck: Joi.object().keys({
    playlistid: Joi.number().required(), //  need aditional check if the id is youtubeId
  }),
  
};
