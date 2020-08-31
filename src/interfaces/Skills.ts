import { Document } from 'mongoose';

export default interface SkillsInterface extends Document {
  title: string;
  logo: string;
  level: string;
}
