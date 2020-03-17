const Profile = require('../models/Profile');

module.exports = {
  async index(req, res) {
    const perfil = await Profile.find();

    return res.json(perfil);
  },

  async store(req, res) {
    const { name, office, bio } = req.body;

    const perfil = await Profile.create({
      name,
      office,
      bio,
      image_url: req.file.path,
    });

    return res.json(perfil);
  },
};
