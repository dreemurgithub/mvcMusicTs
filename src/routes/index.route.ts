import express, { Request, Response, Application } from "express";
import authRoute from "./auth.route";
import userRoute from "./user.route";
import musicInforRoute from "./musicInfor.route";
import streamRoute from "./stream.route";
import commentRoute from "./comment.route";
const expressRoute: Application = express();
expressRoute.use(authRoute);
expressRoute.use(userRoute);
expressRoute.use(musicInforRoute);
expressRoute.use(streamRoute);
expressRoute.use(commentRoute);

// expressRoute.use((req: Request, res: Response)=>{
//     res.status(404).send('There is nothing here')
// })
export default expressRoute;

// const router = express.Router()

// const defaultRoutes = [
//     {
//       path: '/user',
//       route: userRoute,
//     },
//     {
//       path: '/post',
//       route: postRoute,
//     },
//   ]

//   const noAuthRoutes = [
//     {
//       path: '/auth',
//       route: authRoute,
//     },
//   ]

//   defaultRoutes.forEach((route) => {
//     router.use(route.path, protect, route.route);
//   })

//   noAuthRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   })
