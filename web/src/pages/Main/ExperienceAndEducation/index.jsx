import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import BlockTitleIcon from '../../../components/BlockTitleIcon';
import * as LayoutIcons from '../../../components/LayoutIcons';
import Items from './Items';
import { Container, Side } from './styles';

const ExperienceAndEducation = () => {
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    async function loadExperiences() {
      const response = await api.get('get-experiences');

      setExperiences(response.data);
    }

    async function loadEducations() {
      const response = await api.get('get-educations');

      setEducations(response.data);
    }

    loadExperiences();
    loadEducations();
  }, []);

  return (
    <Container>
      <Side>
        <BlockTitleIcon
          targetSection="work-experience"
          titleText="Work Experience"
          blockColor="secundary"
          IconTitle={LayoutIcons.Work}
        />
        <Items data={experiences} />
      </Side>
      <Side>
        <BlockTitleIcon
          targetSection="education"
          titleText="Education"
          blockColor="secundary"
          bgGradiente
          IconTitle={LayoutIcons.Mortarboard}
        />
        <Items data={educations} />
      </Side>
    </Container>
  );
};

export default ExperienceAndEducation;
