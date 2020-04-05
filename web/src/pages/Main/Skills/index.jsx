import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import SectionTitle from '../../../components/SectionTitle';
import { Skills as SkillIcon } from '../../../components/LayoutIcons';
import Slide from './Slide';
import { SkillContainer } from './styles';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      async function loadSkills() {
        const response = await api.get('get-skills');

        if (response) {
          setTimeout(() => setLoading(false), 3000);
          setSkills(response.data);
        }
      }

      loadSkills();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <SkillContainer>
      <SectionTitle
        targetSection="skills"
        titleText="Skills"
        blockColor="secundary"
        IconTitle={SkillIcon}
      />
      <Slide loading={loading} skills={skills} />
    </SkillContainer>
  );
};

export default Skills;
