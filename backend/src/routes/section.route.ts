import { Router } from "express";
import { addSection, getAllSections } from "../controllers/section.controller";
import { addSectionValidation } from "../validations/section.validation";
import { validate } from "../middlewares/validate";

const sectionRouter = Router();

sectionRouter.get("/", getAllSections);
sectionRouter.post("/", addSectionValidation, validate, addSection);

export default sectionRouter;