import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';

import { Container } from './styles';

const Textarea = ({
	name,
	label,
	...res
}) => {
	const textareRef = useRef(null);
	
	const {
		fieldName,
		defaultValue = '',
		registerField,
		error
	} = useField(name);
	
	useEffect(() => {
		registerField({
      name: fieldName,
      ref: textareRef.current,
      path: "value"
    });
	}, [fieldName, registerField]);
	
	return (
		<Container>
			{label && <label htmlFor={fieldName}>{label}</label>}
			
			<textarea 
				ref={textareRef}
				id={fieldName}
				defaultValue={defaultValue}
				{...res}
			/>
			
			{error && <span style={{ color: '#f00' }}>{error}</span>}
		</Container>
	);
};

export default Textarea;