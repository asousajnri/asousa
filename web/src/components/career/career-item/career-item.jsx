import React from 'react';

import { StyledCareerItem } from './career-item-styles';

const CareerItem = ({
  color,
  office,
  years,
  company,
  logo,
}) => {
  return (
    <StyledCareerItem color={color}>
      <img src={logo} alt={company} />
      <h2>{office}</h2>
      <span>{years}</span>
    </StyledCareerItem>
  );
};

export default CareerItem;
