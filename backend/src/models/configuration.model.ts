
import { Schema, model } from 'mongoose';


export const sectionTypes = ['slider', 'horizontalGrid', 'verticalGrid', 'banner', 'horizontalList'] as const;
export const sectionTitles = ['Top Chart', 'Most Trending', 'Continue Watching', 'Most Popular'] as const;

type SectionTypes = typeof sectionTypes[number];
type SectionTitle = typeof sectionTitles[number];

interface ISectionItem {
  title?: string;
  description?: string;
  imageURL: string;
  exclusive: boolean;
}

interface ISection {
  type: SectionTypes;
  title?: SectionTitle;
  items: ISectionItem[];
}

interface IConfiguration {
  name: string;
  isMain: boolean;
  sections: ISection[];
}

const configurationSchema = new Schema<IConfiguration>({
  name: { type: String, required: true, unique: true },
  isMain: { type: Boolean },
  sections: [
    {
      type: { type: String, required: true, enum: sectionTypes },
      title: { type: String, enum: sectionTitles },
      items: [
        {
          title: { type: String },
          description: { type: String },
          imageURL: { type: String, required: true },
          exclusive: { type: Boolean, default: false }
        }
      ]
    }
  ]
})

export const Configuration = model<IConfiguration>('Configuration', configurationSchema);