import React from "react";

import {
  AboutMeContainer,
  Side,
  SideBio,
  BlockTitle,
  Photo,
  LayerOverlay
} from "./styles";

import pathPhoto from "../../assets/images/photo.jpg";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <Side>
        <Photo src={pathPhoto} alt="Antônio Sousa" />
        <LayerOverlay />
      </Side>
      <SideBio>
        <BlockTitle>
          <h1>Antônio Sousa</h1>
          <span>Front End Developer</span>
        </BlockTitle>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </SideBio>
    </AboutMeContainer>
  );
};

export default AboutMe;
