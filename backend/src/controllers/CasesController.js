const Cases = require('../models/Cases');

module.exports = {
  async index(req, res) {
    const cases = await Cases.find();

    return res.json(cases);
  },

  async store(req, res) {
    const { title, subtitle, url } = req.body;
    const { filename: image } = req.file;

    const [imageName] = image.split('.');
    const fileName = `${imageName}.jpg`;

    const cases = await Cases.create({
      title,
      subtitle,
      image: fileName,
      url,
    });

    return res.json(cases);
  },
};
