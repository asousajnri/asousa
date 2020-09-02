import React from 'react';
import ReactFadeIn from 'react-fade-in';

import useFetchApi from '../../../hooks/useFetchApi';

import CareerItem from './career-item';
import CareerLoading from './career-loading';

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
    <>
      {isFetchinging && <CareerLoading career={career} />}

      {!isFetchinging && (
        <StyledCareer>
          {career.map(careerItem => (
            <ReactFadeIn key={careerItem._id} transitionDuration={1000}>
              <CareerItem
                companyName={careerItem.companyName}
                logo="http://place-hold.it/181x70"
                office={careerItem.office}
                brandColor={careerItem.brandColor}
                startYear={careerItem.startYear}
                endYear={careerItem.endYear}
              />
            </ReactFadeIn>
          ))}
        </StyledCareer>
      )}
    </>
  );
};

export default Career;
