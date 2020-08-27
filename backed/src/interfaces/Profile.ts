import { Document } from 'mongoose';

export default interface ProfileInterface extends Document {
  photoUrl: string;
  name: string;
  office: string;
  socialNetwork: [
    {
      name: string;
      url: string;
    },
  ];
}
