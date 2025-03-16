
import { Schema, model } from 'mongoose';

interface ISection {
  name: string;
  type: string;
  title: string;
  showTitle: boolean;
  items: {
    title: string;
    description?: string;
    image: string;
  }[]
}

const sectionSchema = new Schema<ISection>({
  name: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  title: { type: String, required: true },
  showTitle: { type: Boolean, required: true },
  items: [
    {
      title: { type: String, required: true },
      description: { type: String },
      image: { type: String, required: true }
    }
  ]
})

export const Section = model<ISection>('Section', sectionSchema);