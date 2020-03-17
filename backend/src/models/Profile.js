const mongoose = require('mongoose');

const ProfileScheme = mongoose.Schema(
  {
    name: String,
    office: String,
    bio: String,
    image_url: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Profile', ProfileScheme);
