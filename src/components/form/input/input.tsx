import React from 'react';

import { StyledInput } from './input-styles';

interface Props {
    type: string;
    labelText: string;
    refFieldInput: React.MutableRefObject<null>;
};

const Input: React.FC<Props> = ({ type, labelText, refFieldInput }) => (
  <StyledInput>
    <label>{labelText}</label>
    <input type={type} ref={refFieldInput} />
  </StyledInput>
);

export default Input;
