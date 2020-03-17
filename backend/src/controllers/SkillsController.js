const Skills = require('../models/Skills');

module.exports = {
  async index(req, res) {
    const skills = await Skills.find();

    return res.json(skills);
  },

  async store(req, res) {
    const { name } = req.body;

    const skill = await Skills.create({
      name,
    });

    return res.json(skill);
  },
};
