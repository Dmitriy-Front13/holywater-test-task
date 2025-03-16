import { Request, Response } from "express";
import { Configuration } from "../models/configuration.model";
export const getAllConfigurations = async (_req: Request, res: Response) => {
  const configurations = await Configuration.find();
  res.json({ status: 200, data: configurations });
};

export const addConfiguration = async (req: Request, res: Response) => {
  await Configuration.create(req.body);
  res.json({ status: 200, massage: "Section added" });
};
