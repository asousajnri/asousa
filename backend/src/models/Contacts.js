const mongoose = require('mongoose');

const ContactsScheme = mongoose.Schema({
  phones: [
    {
      phone: String,
    },
  ],
  emails: [
    {
      email: String,
    },
  ],
  socialNetworks: [
    {
      social: String,
      social_url: String,
    },
  ],
});

module.exports = mongoose.model('Contacts', ContactsScheme);
