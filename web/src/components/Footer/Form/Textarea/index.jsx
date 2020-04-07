import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

const Textarea = ({ name, placeholder, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      ref={inputRef}
      id={fieldName}
      defaultValue={defaultValue}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Textarea;
