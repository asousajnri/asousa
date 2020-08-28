import { Schema, Model, model } from 'mongoose';

import ProfileInterfaceModel from '../interfaces/Profile';

const ProfileSchema = new Schema(
  {
    photo: String,
    name: String,
    office: String,
  },
  {
    timestamps: true,
  },
);

const Profile: Model<ProfileInterfaceModel> = model<ProfileInterfaceModel>(
  'Profile',
  ProfileSchema,
);

export default Profile;
