import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import SectionTitle from '../../../components/SectionTitle';
import { Project } from '../../../components/LayoutIcons';
import Item from './Item';
import { WorksContainer } from './styles';

const Works = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    async function loadWorks() {
      const response = await api.get('get-works');

      setWorks(response.data);
    }

    loadWorks();

    return () => {
      console.log('Works unmount');
    };
  }, []);

  return (
    <WorksContainer>
      <SectionTitle
        targetSection="works"
        titleText="Works"
        blockColor="primary"
        IconTitle={Project}
      />

      {works.map(work => (
        <Item
          key={work._id}
          name={work.title}
          enterprise={work.subtitle}
          pathImg={work.image}
          projectUrl={work.url}
        />
      ))}
    </WorksContainer>
  );
};

export default Works;
