import { Router } from "express";
import getVideosBySearchController from "../controllers";

const apiRouter = Router();

apiRouter.get("/", getVideosBySearchController);

export { apiRouter };
