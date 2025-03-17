import { body } from "express-validator";

export const addConfigurationValidation = [
  body("name", "Configuration name is required").isString().notEmpty(),
  body("sections", "Sections is required").isArray()
]