import { Schema, Model, model } from 'mongoose';

import CareerInterface from '../interfaces/Career';

const CareerSchema = new Schema(
  {
    companyName: String,
    logo: String,
    office: String,
    startYear: String,
    endYear: String,
    brandColor: String,
  },
  { timestamps: true },
);

const Career: Model<CareerInterface> = model<CareerInterface>(
  'Carrer',
  CareerSchema,
);

export default Career;
