import { Schema, Model, model } from 'mongoose';

import SkillsInterface from '../interfaces/Skills';

const SkillsSchema = new Schema(
  {
    title: String,
    logo: String,
    level: String,
  },
  { timestamps: true },
);

const Skills: Model<SkillsInterface> = model<SkillsInterface>(
  'Skills',
  SkillsSchema,
);

export default Skills;
