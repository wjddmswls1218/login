import {
  homeController,
  createController,
  detailController,
} from "../controllers/globalController";

import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", homeController);
globalRouter.get("/create", createController);
globalRouter.get("/detail", detailController);

export default globalRouter;
