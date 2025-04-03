import { Request, Response, NextFunction } from "express";
import { Series } from "../models/series.model";

export const checkSeriesTitleUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title } = req.body;
  const exists = await Series.exists({ title });
  if (exists) {
    if (req.entityId && req.entityId === exists._id.toString()) {
      next();
    } else {
      res
        .status(409)
        .json({ error: { message: "Series with this title already exists" } });
    }
  } else {
    next();
  }
};
