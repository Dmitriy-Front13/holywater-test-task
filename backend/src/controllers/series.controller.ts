import { Request, Response } from "express";
import { Series } from "../models/series.model";

export const getAllSeries = async (_req: Request, res: Response) => {
  const series = await Series.find();
  res.json({ data: series });
};

export const getSeriesById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const series = await Series.findById(id);
    res.json({ data: series });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: { message: "Something went wrong" } });
  }
};

export const createSeries = async (req: Request, res: Response) => {
  try {
    const newSeries = await Series.create(req.body);
    res.json({ message: "series added", data: newSeries });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: { message: "Something went wrong" } });
  }
};

export const updateSeries = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Series.findByIdAndUpdate(id, req.body);
    res.json({ message: "series updated" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: { message: "Something went wrong" } });
  }
};

export const deleteSeries = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Series.findByIdAndDelete(id);
    res.json({ message: "series deleted" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: { message: "Something went wrong" } });
  }
};
