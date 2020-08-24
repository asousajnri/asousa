import React from 'react';

import { StyledInput } from './input-styles';

interface Props {
    type: string;
    labelText: string;
    ref: React.MutableRefObject<null>;
};

const Input: React.FC<Props> = ({ type, labelText, ref }) => (
  <StyledInput>
    <label>{labelText}</label>
    <input type={type} ref={ref} />
  </StyledInput>
);

export default Input;
