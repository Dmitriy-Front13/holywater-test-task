import { body } from "express-validator";
import {
  Configuration,
  sectionTitles,
  sectionTypes,
} from "../models/configuration.model";

export const configurationValidation = [
  body("name")
    .isString()
    .notEmpty()
    .custom(async (value, { req }) => {
      const existingConfig = await Configuration.findOne({ name: value });

      if (existingConfig && existingConfig._id.toString() !== req.params?.id) {
        throw new Error("Configuration with this name already exists");
      }
    }),
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
  body("sections.*.items.*.title")
    .optional()
    .isString()
    .withMessage("Item title must be a string")
    .notEmpty()
    .withMessage("Item title cannot be empty"),
  body(
    "sections.*.items.*.description",
    "Section item description must be a string"
  )
    .optional()
    .isString(),
  body("sections.*.items.*.imageURL", "Section item image is required")
    .isString()
    .notEmpty(),
  body(
    "sections.*.items.*.exclusive",
    "Section item exclusive must be a boolean"
  )
    .optional()
    .isBoolean(),
];
