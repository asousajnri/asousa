const mongoose = require('mongoose');

const WorksScheme = mongoose.Schema({
  title: String,
  subtitle: String,
  image: String,
});

module.exports = mongoose.model('Works', WorksScheme);
