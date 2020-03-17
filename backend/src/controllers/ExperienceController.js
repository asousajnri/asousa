const Experience = require('../models/Experience');

module.exports = {
  async index(req, res) {
    const experience = await Experience.find();

    return res.json(experience);
  },

  async store(req, res) {
    const { title, subtitle } = req.body;

    const experience = await Experience.create({
      title,
      subtitle,
    });

    return res.json(experience);
  },
};
