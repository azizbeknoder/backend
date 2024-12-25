import { Router } from "express";
import { getAllUser, regiterUser } from "../core/users/users.service.js";
const userRouter = Router();

userRouter.get("/", getAllUser);
userRouter.post("/register", regiterUser);

export default userRouter;
