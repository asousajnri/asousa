import React from 'react';

import CareerItem from './career-item';

import { StyledCareer } from './career-styles';

const Career = () => {
  return (
    <StyledCareer>
      <CareerItem
        color="#EA178C"
        office="Front End Developer"
        years=" 2019/~"
        company="Index Agência Digital"
        logo="http://place-hold.it/181x70"
      />
      <CareerItem
        color="#5E37AC"
        office="Front End Developer"
        years=" 2016/2017"
        company="Bleez E-commerce"
        logo="http://place-hold.it/181x70"
      />
      <CareerItem
        color="#EA8A45"
        office="Web Designer"
        years=" 2013/2016"
        company="Laboratório de Mídias Eletrônicas"
        logo="http://place-hold.it/181x70"
      />
    </StyledCareer>
  );
};

export default Career;
