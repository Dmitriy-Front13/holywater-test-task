
import { Schema, model } from 'mongoose';

interface ISection {
  type: string;
  title: string;
  showTitle: boolean;
  items: {
    title: string;
    description: string;
    image: string;
  }[]
}

const sectionSchema = new Schema<ISection>({
  type: { type: String, required: true },
  title: { type: String, required: true },
  showTitle: { type: Boolean, required: true },
  items: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true }
    }
  ]
})

export const Section = model<ISection>('Section', sectionSchema);