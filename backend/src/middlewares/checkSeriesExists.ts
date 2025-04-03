import { Request, Response, NextFunction } from "express";
import { Series } from "../models/series.model";

export const checkSeriesExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const exists = await Series.exists({ _id: id });
  if (!exists) {
    res.status(404).json({ message: "Series not found" });
  } else {
    req.entityId = id;
    next();
  }
};
