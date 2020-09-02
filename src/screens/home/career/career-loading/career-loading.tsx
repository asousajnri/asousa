import React from 'react';

import { StyledCareer, StyledCareerItem } from './career-loading-styles';

interface ICareer {
  _id: string;
  companyName: string;
  logo: string;
  office: string;
  startYear: string;
  endYear: string;
  brandColor: string;
}

interface Props {
  career: ICareer[];
}

const CareerLoading: React.FC<Props> = ({ career }) => (
  <StyledCareer>
    {career.map(careerItem => (
      <StyledCareerItem key={careerItem._id} />
    ))}
  </StyledCareer>
);

export default CareerLoading;
