import express from "express";
import userRouter from "./users.js";

const appRouter = express.Router();

appRouter.use("/api/v1", userRouter);

export default appRouter;