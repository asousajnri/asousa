import { Request, Response } from 'express';

import CareerInterface from '../interfaces/Career';
import Career from '../models/Career';

export default {
  async index(req: Request, res: Response): Promise<Response> {
    const career = await Career.find();

    return res.json(career);
  },

  async store(req: Request, res: Response): Promise<Response> {
    const {
      companyName,
      office,
      startYear,
      endYear,
      brandColor,
    }: CareerInterface = req.body;

    const { location: logo = '' } = req.fileS3;

    const career = await Career.create({
      companyName,
      logo,
      office,
      startYear,
      endYear,
      brandColor,
    });

    return res.json(career);
  },
};
