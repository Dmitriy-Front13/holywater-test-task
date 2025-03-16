import { body } from "express-validator";
import { Section } from "../models/section.model";

export const addSectionValidation = [
  body("name", "Section name is required").isString().notEmpty().custom(async value => {
    const section = await Section.exists({ name: value });
    if (section) {
      throw new Error("Section name already exists");
    }
  }),
  body("type", "Section type is required").isString().exists(),
  body("title", "Section title is required").isString().exists(),
  body("showTitle", "Section showTitle is required").isBoolean().exists(),
  body("items", "Section items is required").isArray({ min: 1 }),
  body("items.*.title", "Item title is required").isString().notEmpty(),
  body("items.*.description", "Item description must be a string").optional().isString(),
  body("items.*.image", "Item image is required").isString().notEmpty(),
]