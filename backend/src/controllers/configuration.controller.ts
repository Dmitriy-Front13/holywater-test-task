import { Request, Response } from "express";
import { Configuration } from "../models/configuration.model";
import { checkIsMain } from "../helpers/checkIsMain";
export const getAllConfigurations = async (_req: Request, res: Response) => {
  const configurations = await Configuration.find()
    .populate("sections.items")
    .lean();
  res.json({ data: configurations });
};

export const getConfigurationById = async (req: Request, res: Response) => {
  try {
    const configuration = await Configuration.findById(req.params.id)
      .populate("sections.items")
      .lean();

    res.json({ data: configuration });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: { message: "Something went wrong" } });
  }
};

export const getMainConfiguration = async (_req: Request, res: Response) => {
  try {
    const configuration = await Configuration.findOne({ isMain: true })
      .populate("sections.items")
      .lean();

    res.json({ data: configuration });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: { message: "Something went wrong" } });
  }
};

export const createConfiguration = async (_req: Request, res: Response) => {
  try {
    const mainConfiguration = await Configuration.findOne({
      isMain: true,
    }).lean();
    const copyMainConfiguration = {
      ...mainConfiguration,
      _id: undefined,
      name: "Main configuration copy",
      isMain: false,
    };
    const newConfiguration = await Configuration.create(copyMainConfiguration);
    newConfiguration.name = `Configuration ${newConfiguration._id}`;
    await newConfiguration.save();
    res.json({
      message: "Configuration added",
      data: newConfiguration,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: { message: "Something went wrong" } });
  }
};

export const updateConfiguration = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await checkIsMain(req);
    await Configuration.findByIdAndUpdate(id, req.body);
    res.json({ message: "Configuration updated" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: { message: "Something went wrong" } });
  }
};

export const deleteConfiguration = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const configuration = await Configuration.findById(id);
    if (configuration!.isMain) {
      res.status(403).json({
        error: {
          message: "You can't delete main configuration",
        },
      });
    } else {
      await configuration?.deleteOne();
      res.json({ message: "Configuration deleted" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: { message: "Something went wrong" } });
  }
};
