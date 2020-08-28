import { Document } from 'mongoose';

export default interface ProfileInterface extends Document {
  photo: string;
  name: string;
  office: string;
}
