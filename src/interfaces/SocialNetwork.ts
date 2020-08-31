import { Document } from 'mongoose';

export default interface SocialNetworkInterface extends Document {
  title: string;
  link: string;
}
