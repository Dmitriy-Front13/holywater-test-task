import { body } from "express-validator";
import { sectionTitles, sectionTypes } from "../models/configuration.model";

export const configurationValidation = [
  body("name").isString().notEmpty(),
  body("isMain", "Is main must be a boolean").isBoolean(),
  body("sections", "Sections is required").isArray({ min: 5 }),
  body("sections.*.type", "Section type is invalid").isIn(sectionTypes),
  body("sections.*.showTitle", "Show title must be a boolean").isBoolean(),
  body(
    "sections.*.showItemsTitle",
    "Section items type is invalid"
  ).isBoolean(),
  body("sections.*.title", "Section title is invalid")
    .optional()
    .isIn(sectionTitles),
  body(
    "sections.*.items",
    "Section items cannot be empty. At least one item is required"
  ).isArray({ min: 1 }),
];
