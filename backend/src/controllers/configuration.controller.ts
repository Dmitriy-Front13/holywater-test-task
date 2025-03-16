import { Request, Response } from "express";
import { Configuration } from "../models/configuration.model";
export const getAllConfigurations = async (_req: Request, res: Response) => {
  const configurations = await Configuration.find().populate("sections");
  res.json({ status: 200, data: configurations });
};

export const addConfiguration = async (req: Request, res: Response) => {
  try {
    await Configuration.create(req.body);
    res.json({ status: 200, massage: "Configuration added" });
  } catch (e) {
    console.log(e);
    res.json({ status: 500, massage: "Something went wrong" });
  }
};
