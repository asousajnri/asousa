import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import { Container, SkillsList, Placeholder } from './styles';

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
      setTimeout(() => setLoading(false), 3000);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <h2>Skills</h2>

      {loading ? (
        <Placeholder>
          {skills.map(item => (
            <div />
          ))}
        </Placeholder>
      ) : (
        <SkillsList>
          {skills.map(item => (
            <li key={item._id}>{item.name}</li>
          ))}
        </SkillsList>
      )}
    </Container>
  );
};

export default Skills;
