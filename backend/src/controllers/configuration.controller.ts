import { Request, Response } from "express";
import { Configuration } from "../models/configuration.model";
import { checkIsMain } from "../helpers/checkIsMain";
export const getAllConfigurations = async (_req: Request, res: Response) => {
  const configurations = await Configuration.find();
  res.json({ status: 200, data: configurations });
};

export const getConfigurationById = async (req: Request, res: Response) => {
  if (!req.params.id) {
    res.json({ status: 400, massage: "Configuration id is required" });
  }
  const configuration = await Configuration.findById(req.params.id);
  res.json({ status: 200, data: configuration });
}

export const createConfiguration = async (req: Request, res: Response) => {
  try {
    checkIsMain(req);
    const newConfiguration = await Configuration.create(req.body);
    res.json({ status: 200, massage: "Configuration added", data: newConfiguration });
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
    res.json({ status: 200, massage: "Configuration updated", });
  } catch (e) {
    console.log(e);
    res.json({ status: 500, massage: "Something went wrong" });
  }
};
