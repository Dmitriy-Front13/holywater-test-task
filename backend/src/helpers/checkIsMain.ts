import { Request } from "express";
import { Configuration } from "../models/configuration.model";

export const checkIsMain = async (req: Request) => {
  const isMain = req.body.isMain;
  if (isMain) await Configuration.updateMany({}, { isMain: false });
}