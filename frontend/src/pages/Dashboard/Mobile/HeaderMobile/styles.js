import styled from 'styled-components';

export const HeaderMobileContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  padding: 0 2rem;
  background: ${props => props.theme.colorsDashboard.primary};
  color: ${props => props.theme.colorsDashboard.text};
  width: 100%;
`;

export const TitlePage = styled.h1`
  display: flex;
  font-size: 2.8rem;
`;

export const WrapperActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const WrapperIcon = styled.i`
  display: block;
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 1rem;
`;
