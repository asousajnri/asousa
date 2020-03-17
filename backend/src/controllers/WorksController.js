const Works = require('../models/Works');

module.exports = {
  async index(req, res) {
    const works = await Works.find();

    return res.json(works);
  },

  async store(req, res) {
    const { title, subtitle } = req.body;

    const work = await Works.create({
      title,
      subtitle,
      image_url: req.file.path,
    });

    return res.json(work);
  },
};
