const Profile = require('../models/Profile');

module.exports = {
  async index(req, res) {
    const perfil = await Profile.find();

    return res.json(perfil);
  },

  async store(req, res) {
    const { name, office, bio } = req.body;
    const { filename: image } = req.file;

    const [imageName] = image.split('.');
    const fileName = `${imageName}.jpg`;

    const perfil = await Profile.create({
      name,
      office,
      bio,
      image: fileName,
    });

    return res.json(perfil);
  },
};
