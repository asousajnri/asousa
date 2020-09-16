import { Request, Response } from 'express';

import CasesInterface from '../interfaces/Cases';

import Cases from '../models/Cases';

export default {
  async index(req: Request, res: Response): Promise<Response> {
    const cases = await Cases.find();

    return res.json(cases);
  },

  async store(req: Request, res: Response): Promise<Response> {
    const {
      title,
      link,
      description,
      local,
      status,
      tecnologias,
    }: CasesInterface = req.body;
    const { location: coverImage = '' } = req.file;

    const cases = await Cases.create({
      title,
      link,
      coverImage,
      description,
      local,
      tecnologias,
      status,
    });

    return res.json(cases);
  },
};
