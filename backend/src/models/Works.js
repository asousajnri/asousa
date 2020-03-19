const mongoose = require('mongoose');

const WorksScheme = mongoose.Schema({
  title: String,
  subtitle: String,
  image: String,
  url: String,
});

module.exports = mongoose.model('Works', WorksScheme);
