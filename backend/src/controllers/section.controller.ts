import { Request, Response } from "express";
import { Section } from "../models/section.model";

export const getAllSections = async (_req: Request, res: Response) => {
  const sections = await Section.find();
  res.json({ status: 200, data: sections });
};

export const addSection = async (req: Request, res: Response) => {
  try {
    await Section.create(req.body);
    res.json({ status: 200, massage: "Section added" });
  } catch (e) {
    console.log(e);
    res.json({ status: 500, massage: "Something went wrong" });
  }
};
