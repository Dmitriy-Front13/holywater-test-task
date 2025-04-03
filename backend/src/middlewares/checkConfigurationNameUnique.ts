import { Request, Response, NextFunction } from "express";
import { Configuration } from "../models/configuration.model";

export const checkSeriesTitleUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  const exists = await Configuration.exists({ name });
  if (exists) {
    if (req.entityId && req.entityId === exists._id.toString()) {
      next();
    } else {
      res
        .status(409)
        .json({ message: "Configuration with this name already exists" });
    }
  } else {
    next();
  }
};
