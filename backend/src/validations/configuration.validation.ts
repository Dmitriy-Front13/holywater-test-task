import { body } from "express-validator";

export const addConfigurationValidation = [
  body("name", "Configuration name is required").isString().exists(),
  body("sections", "Sections is required").isArray()
]