import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import BlockTitleIcon from '../../../components/BlockTitleIcon';
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
  }, []);

  return (
    <WorksContainer>
      <BlockTitleIcon
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
        />
      ))}
    </WorksContainer>
  );
};

export default Works;
