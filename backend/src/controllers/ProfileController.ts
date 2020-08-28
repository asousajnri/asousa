import { Request, Response } from 'express';

import PofileInterface from '../interfaces/Profile';

import Profile from '../schemas/Profile';

export default {
  async index(req: Request, res: Response): Promise<Response> {
    const profile = await Profile.find();

    return res.json(profile);
  },

  async store(req: Request, res: Response): Promise<Response> {
    const { name, office }: PofileInterface = req.body;
    const { filename: photo } = req.file;

    const profile = await Profile.create({
      photo,
      name,
      office,
    });

    return res.json(profile);
  },
};
