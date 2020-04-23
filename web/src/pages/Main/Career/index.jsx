import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import { Container, InfosContainer, Side, Placeholder } from './styles';

const Career = () => {
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  const [loadingExperiences, setLoadingExperiences] = useState(true);
  const [loadingEducations, setLoadingEducations] = useState(true);

  useEffect(() => {
    async function loadEducations() {
      const response = await api.get('get-educations');

      setEducations(response.data);
    }

    loadEducations();
    setTimeout(() => setLoadingExperiences(false), 3000);
  }, []);

  useEffect(() => {
    async function loadExperiences() {
      const response = await api.get('get-experiences');

      setExperiences(response.data);
    }

    loadExperiences();
    setTimeout(() => setLoadingEducations(false), 3000);
  }, []);

  return (
    <Container>
      <h2>Experience and Education</h2>

      <InfosContainer>
        {loadingExperiences ? (
          <Side as="div">
            {experiences.map(item => (
              <Placeholder key={item._id} />
            ))}
          </Side>
        ) : (
          <Side>
            {experiences.map(item => (
              <li key={item._id}>
                <h3>{item.title}</h3>
                <span>{item.subtitle}</span>
              </li>
            ))}
          </Side>
        )}
        {loadingEducations ? (
          <Side as="div">
            {experiences.map(item => (
              <Placeholder key={item._id} />
            ))}
          </Side>
        ) : (
          <Side>
            {educations.map(item => (
              <li key={item._id}>
                <h3>{item.title}</h3>
                <span>{item.subtitle}</span>
              </li>
            ))}
          </Side>
        )}
      </InfosContainer>
    </Container>
  );
};

export default Career;
