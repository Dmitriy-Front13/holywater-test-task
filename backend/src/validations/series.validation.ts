import { body } from "express-validator";

export const seriesValidation = [
  body("title", "Name is required").isString().notEmpty(),
  body("description", "Description must be a non-empty string")
    .optional()
    .isString()
    .notEmpty(),
  body("imageURL", "Image URL is required").isString().notEmpty(),
  body("exclusive", "Exclusive must be a boolean").isBoolean(),
];
