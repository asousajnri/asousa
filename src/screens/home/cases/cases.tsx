import React from 'react';
import ReactFadeIn from 'react-fade-in';

import useFetchApi from '../../../hooks/useFetchApi';

import { Section } from '../../../containers';

import CasesItem from './cases-item';
import CasesLoading from './cases-loading';

import { StyledCases } from './cases-styles';

interface ICases {
  _id: string;
  title: string;
  link: string;
  coverImage: string;
  description: string;
  local: string;
}

const Cases: React.FC = () => {
  const [cases, setCases] = React.useState<ICases[]>([]);
  const { data, isFetchinging } = useFetchApi<ICases>('cases');

  React.useEffect(() => {
    setCases(data);
  }, [data, setCases]);

  return (
    <Section color="primary" title="Cases">
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
                local={caseItem.local}
              />
            </ReactFadeIn>
          ))}
        </StyledCases>
      )}
    </Section>
  );
};

export default Cases;
