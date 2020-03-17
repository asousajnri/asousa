const mongoose = require('mongoose');

const SkillsScheme = mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Skills', SkillsScheme);
