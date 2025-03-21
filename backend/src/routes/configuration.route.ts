import { Router } from "express";
import { createConfiguration, getAllConfigurations, getConfigurationById, updateConfiguration } from "../controllers/configuration.controller";
import { configurationValidation } from "../validations/configuration.validation";
import { validate } from "../middlewares/validate";

const configurationRouter = Router();

configurationRouter.get("/", getAllConfigurations);
configurationRouter.get("/:id", getConfigurationById);
configurationRouter.post("/", createConfiguration);
configurationRouter.patch("/:id", configurationValidation, validate, updateConfiguration);

export default configurationRouter;