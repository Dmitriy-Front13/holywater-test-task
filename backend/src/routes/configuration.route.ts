import { Router } from "express";
import { createConfiguration, deleteConfiguration, getAllConfigurations, getConfigurationById, updateConfiguration } from "../controllers/configuration.controller";
import { configurationValidation } from "../validations/configuration.validation";
import { validate } from "../middlewares/validate";

const configurationRouter = Router();

configurationRouter.get("/", getAllConfigurations);
configurationRouter.get("/:id", getConfigurationById);
configurationRouter.post("/", createConfiguration);
configurationRouter.put("/:id", configurationValidation, validate, updateConfiguration);
configurationRouter.delete("/:id", deleteConfiguration);

export default configurationRouter;