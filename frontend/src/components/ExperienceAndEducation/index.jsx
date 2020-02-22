import React from "react";

import { Container } from "./styles";

import BlockTitleSections from "../../components/BlockTitleSection";

import Side from "./Side";
import BlockInfo from "./BlockInfo";

const ExperienceAndEducation = () => {
  const dataExperience = [
    {
      title: "Front End Developer",
      subtitle: "Index Digital - 2019/Atualmente"
    },
    {
      title: "Front End Developer",
      subtitle: "Bleez Agência Digital - 2016/2017"
    },
    {
      title: "Web Designer",
      subtitle: "LME (UFC) - 2013/2016"
    }
  ];

  const dataEducation = [
    {
      title: "Análise de Sistemas",
      subtitle: "FATENE - 2013/2017"
    },
    {
      title: "Ensino Integral (Curso de Informática)",
      subtitle: "EEEP Prof. César Campelo - 2010/2013"
    }
  ];

  return (
    <Container>
      <Side>
        <BlockTitleSections
          titleText="Work Experience"
          blockColor="secundary"
        />
        <BlockInfo data={dataExperience} />
      </Side>
      <Side>
        <BlockTitleSections
          titleText="Education"
          blockColor="secundary"
          bgGradiente={true}
        />
        <BlockInfo data={dataEducation} />
      </Side>
    </Container>
  );
};

export default ExperienceAndEducation;
