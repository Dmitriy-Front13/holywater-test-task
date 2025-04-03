import { model, Schema } from "mongoose";

interface ISeries {
  title: string;
  description?: string;
  imageURL: string;
  exclusive: boolean;
}

const SeriesSchema = new Schema<ISeries>(
  {
    title: { type: String, required: true },
    description: { type: String },
    imageURL: { type: String, required: true },
    exclusive: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Series = model<ISeries>("Series", SeriesSchema);
