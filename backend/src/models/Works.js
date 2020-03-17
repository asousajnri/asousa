const mongoose = require('mongoose');

const WorksScheme = mongoose.Schema({
  title: String,
  subtitle: String,
  image_url: String,
});

module.exports = mongoose.model('Works', WorksScheme);
