const Contacts = require('../models/Contacts');

module.exports = {
  async index(req, res) {
    const contacts = await Contacts.find();

    return res.json(contacts);
  },

  async store(req, res) {
    const { phones, emails, socialNetworks } = req.body;

    const contacts = await Contacts.create({
      phones,
      emails,
      socialNetworks,
    });

    return res.json(contacts);
  },
};
