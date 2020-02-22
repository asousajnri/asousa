import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    background: #c62b81;
    padding: 8rem 2rem;
`;

export const Input = styled.input`
    border: 2px solid #fff;
    border-radius: 5px;
    background: transparent;
    height: 7rem;
    padding: 1rem 3rem;
    margin-bottom: 3rem;
    width: 100%;
    font-size: 2rem;
    color: #fff;

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
	font-weight: 700;
	font-size: 3rem;
    margin-bottom: 0;
`;
