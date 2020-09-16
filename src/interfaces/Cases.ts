import { Document } from 'mongoose';

export default interface CasesInterface extends Document {
  title: string;
  link: string;
  coverImage: string;
  description: string;
  local: string;
  tecnologias: string;
}
