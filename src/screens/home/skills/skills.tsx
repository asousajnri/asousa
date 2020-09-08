import React from 'react';

import useFetchApi from '../../../hooks/useFetchApi';

import { Section } from '../../../containers';

import SkillsItem from './skills-item';
import SkillsLoading from './skills-loading';

import { StyledSkills } from './skills-styles';

interface ISkills {
  _id: string;
  title: string;
  logo: string;
  level: string;
}

const Skills: React.FC = () => {
  const [skills, setSkills] = React.useState<ISkills[]>([]);
  const { data, isFetchinging } = useFetchApi<ISkills>('skills');

  React.useEffect(() => {
    setSkills(data);
  }, [data, setSkills]);

  return (
    <Section title="Habilidades" color="secondary">
      {isFetchinging && <SkillsLoading skills={skills} />}
      {!isFetchinging && (
        <>
          <StyledSkills>
            {skills.map((skill) => (
              <SkillsItem key={skill._id} title={skill.title} logo={skill.logo} level={skill.level} />
            ))}
          </StyledSkills>
        </>
      )}
    </Section>
  );
};

export default Skills;
