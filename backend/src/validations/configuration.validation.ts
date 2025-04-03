import { body } from "express-validator";
import { sectionTitles, sectionTypes } from "../models/configuration.model";
import { Types } from "mongoose";

export const configurationValidation = [
  body("name").isString().notEmpty(),
  body("isMain", "Is main must be a boolean").isBoolean(),
  body("sections", "Sections is required")
    .isArray({ min: 1 })
    .custom((sections) => {
      for (const section of sections) {
        const ids = section.items.map((id: Types.ObjectId) => id.toString());
        const uniqueIds = new Set(ids);
        if (uniqueIds.size !== ids.length) {
          throw new Error("Duplicate items found in a section");
        }
      }
      return true;
    }),
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
