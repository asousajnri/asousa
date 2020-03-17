const Education = require('../models/Education');

module.exports = {
  async index(req, res) {
    const education = await Education.find();

    return res.json(education);
  },

  async store(req, res) {
    const { title, subtitle } = req.body;

    const education = await Education.create({
      title,
      subtitle,
    });

    return res.json(education);
  },
};
