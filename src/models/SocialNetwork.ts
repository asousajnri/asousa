import { Schema, Model, model } from 'mongoose';

import SocialNetworkInterface from '../interfaces/SocialNetwork';

const SocialNetworkSchema = new Schema(
  {
    title: String,
    link: String,
  },
  { timestamps: true },
);

const SocialNetwork: Model<SocialNetworkInterface> = model<
  SocialNetworkInterface
>('SocialNetwork', SocialNetworkSchema);

export default SocialNetwork;
