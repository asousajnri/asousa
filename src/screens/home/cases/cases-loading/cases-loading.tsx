import React from 'react';

import { StyledCases, StyledCase } from './cases-loading-styles';

interface ICases {
  _id: string;
  title: string;
  link: string;
  coverImage: string;
  description: string;
  category: string;
}

interface Props {
  cases: ICases[];
}

const CasesLoading: React.FC<Props> = ({ cases }) => (
  <StyledCases>
    {cases.map(caseItem => (
      <StyledCase key={caseItem._id} />
    ))}
  </StyledCases>
);

export default CasesLoading;
