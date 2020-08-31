import { Document } from 'mongoose';

export default interface CareerInterface extends Document {
  companyName: string;
  logo: string;
  office: string;
  startYear: string;
  endYear: string;
}
