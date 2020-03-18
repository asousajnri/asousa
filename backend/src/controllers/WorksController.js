const Works = require('../models/Works');

module.exports = {
  async index(req, res) {
    const works = await Works.find();

    return res.json(works);
  },

  async store(req, res) {
    const { title, subtitle } = req.body;
    const { filename: image } = req.file;

    const [imageName] = image.split('.');
    const fileName = `${imageName}.jpg`;

    const work = await Works.create({
      title,
      subtitle,
      image: fileName,
    });

    return res.json(work);
  },
};
