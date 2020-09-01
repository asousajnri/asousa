import { Request, Response } from 'express';

import CasesInterface from '../interfaces/Cases';

import Cases from '../models/Cases';

export default {
  async index(req: Request, res: Response): Promise<Response> {
    const cases = await Cases.find();

    return res.json(cases);
  },

  async store(req: Request, res: Response): Promise<Response> {
    const { title, link, description, category }: CasesInterface = req.body;
    const { filename: coverImage } = req.file;

    const cases = await Cases.create({
      title,
      link,
      coverImage,
      description,
      category,
    });

    return res.json(cases);
  },
};
