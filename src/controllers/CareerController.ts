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
      bgColor,
    }: CareerInterface = req.body;

    const { filename: logo } = req.file;

    const career = await Career.create({
      companyName,
      logo,
      office,
      startYear,
      endYear,
      bgColor,
    });

    return res.json(career);
  },
};
