import React from 'react';
import ReactFadeIn from 'react-fade-in';

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
          {cases.map((caseItem) => (
            <ReactFadeIn key={caseItem._id} transitionDuration={1000}>
              <CasesItem
                background="primary"
                id={caseItem._id}
                title={caseItem.title}
                coverImage={caseItem.coverImage}
                link={caseItem.link}
                description={caseItem.description}
                category={caseItem.category}
              />
            </ReactFadeIn>
          ))}
        </StyledCases>
      )}
    </>
  );
};

export default Cases;
