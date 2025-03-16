import { Router } from "express";
import { addSection, getAllSections } from "../controllers/section.controller";

const sectionRouter = Router();

sectionRouter.get("/", getAllSections);
sectionRouter.post("/", addSection);

export default sectionRouter;