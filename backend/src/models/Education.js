const mongoose = require('mongoose');

const EducationScheme = mongoose.Schema({
  title: String,
  subtitle: String,
});

module.exports = mongoose.model('Education', EducationScheme);
