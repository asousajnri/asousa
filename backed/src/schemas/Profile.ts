import { Schema, Model, model } from 'mongoose';

import ProfileInterface from '../interfaces/Profile';

const ProfileSchema = new Schema();

const Profile: Model<ProfileInterface> = model<ProfileInterface>(
  'Profile',
  ProfileSchema,
);

export default Profile;
