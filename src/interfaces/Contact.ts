import { Document } from 'mongoose';

export default interface ContactInterface extends Document {
  inputs: [
    {
      label: string;
      inputType: string;
      inputValue: string;
      inputPlaceholder: string;
    },
  ];
  banner: {
    title: string;
    text: string;
    emphasis: string;
  };
}
