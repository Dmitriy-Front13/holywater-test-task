
import { Schema, model } from 'mongoose';


export const sectionTypes = ['slider', 'horizontalGrid', 'verticalGrid', 'banner', 'horizontalList'] as const;
export const sectionTitles = ['Top Chart', 'Most Trending', 'Continue Watching', 'Most Popular', 'Slider', 'Banner'] as const;

type SectionTypes = typeof sectionTypes[number];
type SectionTitle = typeof sectionTitles[number];

interface ISectionItem {
  title: string;
  description?: string;
  imageURL: string;
  exclusive: boolean;
}

interface ISection {
  type: SectionTypes;
  title: SectionTitle;
  showTitle: boolean;
  showItemsTitle: boolean;
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
      title: { type: String, required: true, enum: sectionTitles },
      showTitle: { type: Boolean, required: true, default: true },
      showItemsTitle: { type: Boolean, required: true, default: true },
      items: [
        {
          title: { type: String, required: true },
          showTitle: { type: Boolean },
          description: { type: String },
          imageURL: { type: String, required: true },
          exclusive: { type: Boolean, default: false }
        }
      ]
    }
  ],

}, { timestamps: true })

export const Configuration = model<IConfiguration>('Configuration', configurationSchema);