import { Request, Response } from 'express';

import SocialNetworkInterface from '../interfaces/SocialNetwork';
import SocialNetwork from '../models/SocialNetwork';

export default {
  async index(req: Request, res: Response): Promise<Response> {
    const socialNetwork = await SocialNetwork.find();

    return res.json(socialNetwork);
  },

  async store(req: Request, res: Response): Promise<Response> {
    const { title, link }: SocialNetworkInterface = req.body;

    const socialNetwork = await SocialNetwork.create({
      title,
      link,
    });

    return res.json(socialNetwork);
  },
};
