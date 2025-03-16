import { Router } from "express";
import { addConfiguration, getAllConfigurations } from "../controllers/configuration.controller";

const configurationRouter = Router();

configurationRouter.get("/", getAllConfigurations);
configurationRouter.post("/", addConfiguration);

export default configurationRouter;