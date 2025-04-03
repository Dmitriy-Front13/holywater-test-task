import { Request, Response, NextFunction } from "express";
import { Configuration } from "../models/configuration.model";
import { error } from "console";

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
      res.status(409).json({
        error: { message: "Configuration with this name already exists" },
      });
    }
  } else {
    next();
  }
};
