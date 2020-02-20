import React from "react";

import { uniqueId } from "lodash";

import { Container } from "./styles";

import BlockInfoItem from "./BlockInfoItem";

const BlockInfo = ({ data }) => {
  return (
    <Container>
      {data.map(item => (
        <BlockInfoItem
          key={uniqueId()}
          title={item.title}
          subTitle={item.subtitle}
        />
      ))}
    </Container>
  );
};

export default BlockInfo;
