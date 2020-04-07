import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import SectionTitle from '../../../components/SectionTitle';
import * as LayoutIcons from '../../../components/LayoutIcons';
import Items from './Items';
import { Container, Side } from './styles';

const Career = () => {
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    async function loadEducations() {
      const response = await api.get('get-educations');

      setEducations(response.data);
    }

    loadEducations();
  }, []);

  useEffect(() => {
    async function loadExperiences() {
      const response = await api.get('get-experiences');

      setExperiences(response.data);
    }

    loadExperiences();

    return () => {
      console.log('Experience And Education unmount');
    };
  }, []);

  return (
    <Container>
      <Side>
        <SectionTitle
          targetSection="work-experience"
          titleText="Work Experience"
          blockColor="secundary"
          IconTitle={LayoutIcons.Work}
        />
        <Items data={experiences} />
      </Side>
      <Side>
        <SectionTitle
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

export default Career;
