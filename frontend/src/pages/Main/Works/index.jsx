import React, { useState } from 'react';

import BlockTitleIcon from '../../../components/BlockTitleIcon';
import { Project } from '../../../components/LayoutIcons';
import Block from './Item';
import { WorksContainer } from './styles';

const Works = () => {
  const [worksLis, setWorksList] = useState([
    {
      name: 'Printerama',
      enterprise: 'Bleez Agência Digital',
      pathImg: require('../../../assets/images/works/printerama.jpg'),
    },
    {
      name: 'Bransk',
      enterprise: 'Index Digital',
      pathImg: require('../../../assets/images/works/bransk.jpg'),
    },
    {
      name: 'Mesa Brasil',
      enterprise: 'Index Digital',
      pathImg: require('../../../assets/images/works/mesa.jpg'),
    },
    {
      name: 'Colégio Nova Dimensão',
      enterprise: 'Freelancer',
      pathImg: require('../../../assets/images/works/colegioNd.jpg'),
    },
    {
      name: 'Roteiros Incríveis',
      enterprise: 'Index Digital',
      pathImg: require('../../../assets/images/works/roteiros.jpg'),
    },
    {
      name: 'Gaspar Viana',
      enterprise: 'Index Digital',
      pathImg: require('../../../assets/images/works/clinica.jpg'),
    },
  ]);

  return (
    <WorksContainer>
      <BlockTitleIcon
        targetSection="works"
        titleText="Works"
        blockColor="primary"
        IconTitle={Project}
      />

      {worksLis.map((work, index) => (
        <Block
          key={index}
          name={work.name}
          enterprise={work.enterprise}
          pathImg={work.pathImg}
        />
      ))}
    </WorksContainer>
  );
};

export default Works;
