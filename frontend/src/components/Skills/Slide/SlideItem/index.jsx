import React from "react";

import { Container } from "./styles";

const SlideItem = ({ children }) => {
  return (
    <Container>
      <span>{children}</span>
    </Container>
  );
};

export default SlideItem;
