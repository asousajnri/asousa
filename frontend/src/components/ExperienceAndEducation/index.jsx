import React from 'react';

import BlockTitle from '../BlockTitle';
import * as LayoutIcons from '../LayoutIcons';
import BlockInfo from './BlockInfo';
import Side from './Side';
import { Container } from './styles';

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
          titleText="Work Experience"
          blockColor="secundary"
          IconTitle={LayoutIcons.Work}
        />
        <BlockInfo data={dataExperience} />
      </Side>
      <Side>
        <BlockTitle
          titleText="Education"
          blockColor="secundary"
          bgGradiente
          IconTitle={LayoutIcons.Mortarboard}
        />
        <BlockInfo data={dataEducation} />
      </Side>
    </Container>
  );
};

export default ExperienceAndEducation;
