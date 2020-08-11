const mongoose = require('mongoose');

const CasesScheme = mongoose.Schema({
  title: String,
  subtitle: String,
  image: String,
  url: String,
});

module.exports = mongoose.model('Cases', CasesScheme);
