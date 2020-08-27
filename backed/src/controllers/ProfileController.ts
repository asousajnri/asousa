import { Request, Response } from 'express';

import Profile from '../schemas/Profile';

export default {
  async index(req: Request, res: Response): Promise<Response> {
    const profile = await Profile.find();

    return res.send(profile);
  },
};
