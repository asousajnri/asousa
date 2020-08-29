import React from 'react';

import { StyledCareerItem } from './career-item-styles';

interface Props {
  color: string;
  office: string;
  years: string;
  company: string;
  logo: string;
}

const CareerItem: React.FC<Props> = ({
  color,
  office,
  years,
  company,
  logo,
}) => (
  <StyledCareerItem color={color}>
    <img src={logo} alt={company} />
    <h2>{office}</h2>
    <span>{years}</span>
  </StyledCareerItem>
);

export default CareerItem;
