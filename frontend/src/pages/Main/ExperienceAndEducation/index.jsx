import React from 'react';

import BlockTitle from '../../../components/BlockTitle';
import * as LayoutIcons from '../../../components/LayoutIcons';
import Items from './Items';
import { Container, Side } from './styles';

const ExperienceAndEducation = () => {
  const dataExperience = [
    {
      title: 'Front End Developer',
      subtitle: 'Index Digital - 2019/Atualmente',
    },
    {
      title: 'Front End Developer',
      subtitle: 'Bleez Agência Digital - 2016/2017',
    },
    {
      title: 'Web Designer',
      subtitle: 'LME (UFC) - 2013/2016',
    },
  ];

  const dataEducation = [
    {
      title: 'Análise de Sistemas',
      subtitle: 'FATENE - 2013/2017',
    },
    {
      title: 'Ensino Integral (Curso de Informática)',
      subtitle: 'EEEP Prof. César Campelo - 2010/2013',
    },
  ];

  return (
    <Container>
      <Side>
        <BlockTitle
          targetSection="work-experience"
          titleText="Work Experience"
          blockColor="secundary"
          IconTitle={LayoutIcons.Work}
        />
        <Items data={dataExperience} />
      </Side>
      <Side>
        <BlockTitle
          targetSection="education"
          titleText="Education"
          blockColor="secundary"
          bgGradiente
          IconTitle={LayoutIcons.Mortarboard}
        />
        <Items data={dataEducation} />
      </Side>
    </Container>
  );
};

export default ExperienceAndEducation;
