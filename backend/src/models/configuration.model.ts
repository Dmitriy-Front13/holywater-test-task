
import { Schema, Types, model } from 'mongoose';

interface IConfiguration {
  name: string;
  sections: Types.ObjectId;
}

const configurationSchema = new Schema<IConfiguration>({
  name: { type: String, required: true },
  sections: [{ type: Schema.Types.ObjectId, ref: 'Section' }]
})

export const Configuration = model<IConfiguration>('Configuration', configurationSchema);