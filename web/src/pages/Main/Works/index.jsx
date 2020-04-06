import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import SectionTitle from '../../../components/SectionTitle';
import { Project } from '../../../components/LayoutIcons';
import Item from './Item';
import { WorksContainer } from './styles';

import Placeholder from './Placeholder';

const Works = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      async function loadWorks() {
        const response = await api.get('get-works');

        setWorks(response.data);
      }

      loadWorks();
      setTimeout(() => setLoading(false), 3000);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <WorksContainer>
      <SectionTitle
        targetSection="works"
        titleText="Works"
        blockColor="primary"
        IconTitle={Project}
      />

      {loading ? (
        <>
          <Placeholder />
        </>
      ) : (
        works.map(work => (
          <Item
            key={work._id}
            name={work.title}
            enterprise={work.subtitle}
            pathImg={work.image}
            projectUrl={work.url}
          />
        ))
      )}
    </WorksContainer>
  );
};

export default Works;
