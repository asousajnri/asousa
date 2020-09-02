import React from 'react';

import useFetchApi from '../../../hooks/useFetchApi';

import CasesItem from './cases-item';
import CasesLoading from './cases-loading';

import { StyledCases } from './cases-styles';

interface ICases {
  _id: string;
  title: string;
  link: string;
  coverImage: string;
  description: string;
  category: string;
}

const Cases: React.FC = () => {
  const [cases, setCases] = React.useState<ICases[]>([]);
  const { data, isFetchinging } = useFetchApi<ICases>('cases');

  React.useEffect(() => {
    setCases(data);
  }, [data, setCases]);

  return (
    <>
      {isFetchinging && <CasesLoading cases={cases} />}

      {!isFetchinging && (
        <StyledCases>
          {cases.map(caseItem => (
            <CasesItem
              key={caseItem._id}
              background="primary"
              id={caseItem._id}
              title={caseItem.title}
              coverImage="https://place-hold.it/600x600"
              link={caseItem.link}
              description={caseItem.description}
              category={caseItem.category}
            />
          ))}
        </StyledCases>
      )}
    </>
  );
};

export default Cases;
