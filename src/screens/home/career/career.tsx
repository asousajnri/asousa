import React from 'react';

import useFetchApi from '../../../hooks/useFetchApi';

import CareerItem from './career-item';

import { StyledCareer } from './career-styles';

interface ICareer {
  _id: string;
  companyName: string;
  logo: string;
  office: string;
  startYear: string;
  endYear: string;
  brandColor: string;
}

const Career: React.FC = () => {
  const [career, setCareer] = React.useState<ICareer[]>([]);
  const { data, isFetchinging } = useFetchApi<ICareer>('career');

  React.useEffect(() => {
    setCareer(data);
  }, [data, setCareer]);

  return (
    <StyledCareer>
      {career.map(careerItem => (
        <CareerItem
          key={careerItem._id}
          companyName={careerItem.companyName}
          logo="http://place-hold.it/181x70"
          office={careerItem.office}
          brandColor={careerItem.brandColor}
          startYear={careerItem.startYear}
          endYear={careerItem.endYear}
        />
      ))}
    </StyledCareer>
  );
};

export default Career;
