import React, { useState } from "react";

import { WorksContainer } from "./styles";

import BlockTitleSection from "../BlockTitleSection";

import Block from "./Block";

const Works = () => {
  const [worksLis, setWorksList] = useState([
    `${require("../../assets/images/works/printerama.jpg")}`,
    `${require("../../assets/images/works/bransk.jpg")}`,
    `${require("../../assets/images/works/mesa.jpg")}`,
    `${require("../../assets/images/works/colegioNd.jpg")}`,
    `${require("../../assets/images/works/roteiros.jpg")}`,
    `${require("../../assets/images/works/clinica.jpg")}`
  ]);

  return (
    <WorksContainer>
      <BlockTitleSection titleText="Works" blockColor="primary" />

      {worksLis.map((work, index) => (
        <Block key={index} pathImg={work} />
      ))}
    </WorksContainer>
  );
};

export default Works;
