import { Schema, Model, model } from 'mongoose';

import CasesInterface from '../interfaces/Cases';

const CasesSchema = new Schema(
  {
    title: String,
    link: String,
    coverImage: String,
    description: String,
    local: String,
    tecs: String,
    status: String,
  },
  { timestamps: true },
);

const Cases: Model<CasesInterface> = model<CasesInterface>(
  'Cases',
  CasesSchema,
);

export default Cases;
