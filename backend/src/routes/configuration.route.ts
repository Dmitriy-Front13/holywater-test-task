import { Router } from "express";
import { addConfiguration, getAllConfigurations } from "../controllers/configuration.controller";
import { addConfigurationValidation } from "../validations/configuration.validation";
import { validate } from "../middlewares/validate";

const configurationRouter = Router();

configurationRouter.get("/", getAllConfigurations);
configurationRouter.post("/", addConfigurationValidation, validate, addConfiguration);

export default configurationRouter;