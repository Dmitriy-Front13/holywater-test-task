import { Router } from "express";
import {
  createConfiguration,
  deleteConfiguration,
  getAllConfigurations,
  getConfigurationById,
  updateConfiguration,
} from "../controllers/configuration.controller";
import { configurationValidation } from "../validations/configuration.validation";
import { validate } from "../middlewares/validate";
import { checkConfigurationExists } from "../middlewares/checkConfigurationExists";
import { checkSeriesTitleUnique } from "../middlewares/checkSeriesTitleUnique";

const configurationRouter = Router();

configurationRouter.get("/", getAllConfigurations);
configurationRouter.get("/:id", checkConfigurationExists, getConfigurationById);
configurationRouter.post(
  "/",
  configurationValidation,
  validate,
  checkSeriesTitleUnique,
  createConfiguration
);
configurationRouter.put(
  "/:id",
  configurationValidation,
  validate,
  checkConfigurationExists,
  checkSeriesTitleUnique,
  updateConfiguration
);
configurationRouter.delete(
  "/:id",
  checkConfigurationExists,
  deleteConfiguration
);

export default configurationRouter;
