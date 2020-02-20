import React from "react";

import { Container } from "./styles";

const BlockInfoItem = ({ title, subTitle }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <span>{subTitle}</span>
    </Container>
  );
};

export default BlockInfoItem;
