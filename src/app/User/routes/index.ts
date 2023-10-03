import { Router } from "express";
import * as Controller from "../controller";

const userRouter = Router();

userRouter.get("/", Controller.getAllUsers);
userRouter.get("/:id", Controller.getUser);
userRouter.post("/", Controller.createUser);
userRouter.put("/:id", Controller.updateUser);
userRouter.delete("/:id", Controller.deleteUser);

export default userRouter;
