import { Router } from "express";
import { addConfiguration, getAllConfigurations, updateConfiguration } from "../controllers/configuration.controller";
import { configurationValidation } from "../validations/configuration.validation";
import { validate } from "../middlewares/validate";

const configurationRouter = Router();

configurationRouter.get("/", getAllConfigurations);
configurationRouter.post("/", configurationValidation, validate, addConfiguration);
configurationRouter.patch("/:id", configurationValidation, validate, updateConfiguration);

export default configurationRouter;