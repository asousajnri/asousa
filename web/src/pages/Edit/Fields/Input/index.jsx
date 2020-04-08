import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

const Input = ({ 
	name, 
	label, 
	...res 
}) => {
	const inputRef = useRef(null);
	
	const {
		fieldName,
		defaultValue = '',
		registerField,
		error
	} = useField(name);
	
	useEffect(() => {
		registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
	}, [fieldName, registerField]);
	
	return (
		<Container>
			{label && <label htmlFor={fieldName}>{label}</label>}
			
			<input 
				ref={inputRef}
				id={fieldName}
				defaultValue={defaultValue}
				{...res}
			/>
			
			{error && <span style={{ color: '#f00' }}>{error}</span>}
		</Container>
	);
};

export default Input;