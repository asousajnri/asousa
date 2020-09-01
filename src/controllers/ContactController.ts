import { Request, Response } from 'express';

import ContactInterface from '../interfaces/Contact';
import Contact from '../models/Contact';

export default {
  async index(req: Request, res: Response): Promise<Response> {
    const contact = await Contact.find();

    return res.json(contact);
  },

  async store(req: Request, res: Response): Promise<Response> {
    const { inputs, banner }: ContactInterface = req.body;

    const contact = await Contact.create({
      inputs,
      banner,
    });

    return res.json(contact);
  },
};
