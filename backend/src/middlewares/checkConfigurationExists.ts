import { Request, Response, NextFunction } from "express";
import { Configuration } from "../models/configuration.model";

export const checkConfigurationExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const exists = await Configuration.exists({ _id: id });
  if (!exists) {
    res.status(404).json({ error: { message: "Configuration not found" } });
  } else {
    req.entityId = id;
    next();
  }
};
