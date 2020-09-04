import { Request, Response } from 'express';

import SkillsInterface from '../interfaces/Skills';
import Skills from '../models/Skills';

export default {
  async index(req: Request, res: Response): Promise<Response> {
    const skills = await Skills.find();

    return res.json(skills);
  },

  async store(req: Request, res: Response): Promise<Response> {
    const { title, level }: SkillsInterface = req.body;
    const { location: logo = '' } = req.file;

    const skills = await Skills.create({
      title,
      logo,
      level,
    });

    return res.json(skills);
  },
};
