import { Request, Response } from "express";
import { Configuration } from "../models/configuration.model";
import { checkIsMain } from "../helpers/checkIsMain";
export const getAllConfigurations = async (_req: Request, res: Response) => {
  const configurations = await Configuration.find();
  res.json({ status: 200, data: configurations });
};

export const addConfiguration = async (req: Request, res: Response) => {
  try {
    checkIsMain(req);
    await Configuration.create(req.body);
    res.json({ status: 200, massage: "Configuration added" });
  } catch (e) {
    console.log(e);
    res.json({ status: 500, massage: "Something went wrong" });
  }
};

export const updateConfiguration = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    checkIsMain(req);
    await Configuration.findByIdAndUpdate(id, req.body);
    res.json({ status: 200, massage: "Configuration updated" });
  } catch (e) {
    console.log(e);
    res.json({ status: 500, massage: "Something went wrong" });
  }
};
