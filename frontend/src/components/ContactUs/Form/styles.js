import styled from 'styled-components';

import devices from "../../../styles/devices";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: none;
    background: transparent;
    width: 100%;
    font-size: 2rem;
    color: #fff;
    text-transform: uppercase;

    &::placeholder {
        color: #fff;
    }
`;

export const Textarea = styled(Input)`
	padding: 3rem;
	resize: none;
	height: 18rem;
`;

export const Button = styled(Input)`
	font-size: 3rem;
    cursor: pointer;
`;
