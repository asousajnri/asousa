import React from "react";

import { WorksContainer } from "./styles";

import BlockTitleSection from "../BlockTitleSection";

import Block from "./Block";

const Works = () => {
  return (
    <WorksContainer>
      <BlockTitleSection titleText="Works" blockColor="primary" />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
    </WorksContainer>
  );
};

export default Works;
