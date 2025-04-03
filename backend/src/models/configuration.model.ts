import { Schema, Types, model } from "mongoose";

export const sectionTypes = [
  "slider",
  "horizontalGrid",
  "verticalGrid",
  "banner",
  "horizontalList",
] as const;
export const sectionTitles = [
  "Top Chart",
  "Most Trending",
  "Continue Watching",
  "Most Popular",
  "Slider",
  "Banner",
] as const;

type SectionTypes = (typeof sectionTypes)[number];
type SectionTitle = (typeof sectionTitles)[number];

interface ISection {
  type: SectionTypes;
  title: SectionTitle;
  showTitle: boolean;
  showItemsTitle: boolean;
  items: { item: Types.ObjectId }[];
}

interface IConfiguration {
  name: string;
  isMain: boolean;
  sections: ISection[];
}

const configurationSchema = new Schema<IConfiguration>(
  {
    name: { type: String, required: true, unique: true },
    isMain: { type: Boolean },
    sections: [
      {
        type: { type: String, required: true, enum: sectionTypes },
        title: { type: String, required: true, enum: sectionTitles },
        showTitle: { type: Boolean, required: true, default: true },
        showItemsTitle: { type: Boolean, required: true, default: true },
        items: [
          {
            item: {
              type: Schema.Types.ObjectId,
              ref: "Series",
              required: true,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export const Configuration = model<IConfiguration>(
  "Configuration",
  configurationSchema
);
