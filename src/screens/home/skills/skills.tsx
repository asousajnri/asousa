import React from 'react';
import ReactFadeIn from 'react-fade-in';

import useFetchApi from '../../../hooks/useFetchApi';

import SkillsItem from './skills-item';
import SkillsLoading from './skills-loading';

import { StyledSkills } from './skills-styles';

interface ISkills {
  _id: string;
  title: string;
  logo: string;
  level: string;
}

const Skills = () => {
  const [skills, setSkills] = React.useState<ISkills[]>([]);
  const { data, isFetchinging } = useFetchApi<ISkills>('skills');

  React.useEffect(() => {
    setSkills(data);
  }, [data, setSkills]);

  return (
    <>
      {isFetchinging && <SkillsLoading skills={skills} />}
      {!isFetchinging && (
        <StyledSkills>
          {skills.map(skill => (
            <ReactFadeIn key={skill._id} transitionDuration={1000}>
              <SkillsItem title={skill.title} logo={skill.logo} level={skill.level} />
            </ReactFadeIn>
          ))}
        </StyledSkills>
      )}
    </>
  );
};

export default Skills;
