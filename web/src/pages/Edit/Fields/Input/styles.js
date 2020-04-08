import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
	
	&:last-of-type {
		margin-bottom: 0;
	}
	
	label {
		font-weight: bold;
		margin-bottom: 1rem;
	}
	
	input {
		height: 4.5rem;
		padding: 0 2rem;
		border: 2px solid #ddd;
		color: #444;
		border-radius: 4px;
	}
`;