import { Router } from "express";
import {
  getAllSeries,
  getSeriesById,
  createSeries,
  deleteSeries,
  updateSeries,
} from "../controllers/series.controller";
import { validate } from "../middlewares/validate";
import { checkSeriesExists } from "../middlewares/checkSeriesExists";
import { seriesValidation } from "../validations/series.validation";
import { checkSeriesTitleUnique } from "../middlewares/checkSeriesTitleUnique";

const seriesRouter = Router();

seriesRouter.get("/", getAllSeries);
seriesRouter.get("/:id", checkSeriesExists, getSeriesById);
seriesRouter.post("/", checkSeriesTitleUnique, createSeries);
seriesRouter.put(
  "/:id",
  seriesValidation,
  validate,
  checkSeriesExists,
  checkSeriesTitleUnique,
  updateSeries
);
seriesRouter.delete("/:id", checkSeriesExists, deleteSeries);

export default seriesRouter;
