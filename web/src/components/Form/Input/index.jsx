import React from 'react';

import { InputContainer } from './styles';

const Input = ({ type = 'text', name = 'input', placeholder = 'Input' }) => (
  <InputContainer type={type} name={name} placeholder={placeholder} />
);

export default Input;
