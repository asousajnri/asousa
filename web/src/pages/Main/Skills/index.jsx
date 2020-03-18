import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import BlockTitleIcon from '../../../components/BlockTitleIcon';
import { Skills as SkillIcon } from '../../../components/LayoutIcons';
import Slide from './Slide';
import { SkillContainer } from './styles';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function loadSkills() {
      const response = await api.get('get-skills');

      setSkills(response.data);
    }

    loadSkills();
  }, []);

  return (
    <SkillContainer>
      <BlockTitleIcon
        targetSection="skills"
        titleText="Skills"
        blockColor="secundary"
        IconTitle={SkillIcon}
      />
      <Slide skills={skills} />
    </SkillContainer>
  );
};

export default Skills;
