const mongoose = require('mongoose');

const ExperienceScheme = mongoose.Schema({
  title: String,
  subtitle: String,
});

module.exports = mongoose.model('Experience', ExperienceScheme);
