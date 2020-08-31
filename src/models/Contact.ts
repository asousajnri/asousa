import { Model, model, Schema } from 'mongoose';

import ContactInterface from '../interfaces/Contact';

const ContactSchema = new Schema(
  {
    inputs: [
      {
        label: String,
        inputType: String,
        inputValue: String,
        inputPlaceholder: String,
      },
    ],
    banner: {
      title: String,
      text: String,
      emphasis: String,
    },
  },
  { timestamps: true },
);

const Contact: Model<ContactInterface> = model<ContactInterface>(
  'Contact',
  ContactSchema,
);

export default Contact;
