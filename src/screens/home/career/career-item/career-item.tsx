import React from 'react';

import { StyledCareerItem } from './career-item-styles';

interface Props {
  companyName: string;
  logo: string;
  office: string;
  startYear: string;
  endYear: string;
  brandColor: string;
}

const CareerItem: React.FC<Props> = ({ companyName, logo, office, startYear, endYear, brandColor }) => (
  <StyledCareerItem brandColor={brandColor}>
    <img src={logo} alt={companyName} />
    <h2>{office}</h2>
    <span>{`${startYear}/${endYear}`}</span>
  </StyledCareerItem>
);

export default CareerItem;
