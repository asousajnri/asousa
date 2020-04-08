import styled from 'styled-components';

import { sizes } from '../../styles/devices';

export const Container = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3rem 2rem;
`;

export const BoxEdit = styled.div`
	width: 100%;
	max-width: 96rem;
	background: #fff;
	padding: 3rem 2rem;
	border-radius: 5px;
`;

export const BoxForm = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 4rem;
	
	h2 {
		font-size: 3.5rem;
		margin-bottom: 2rem;
	}
`;