import React, { useState } from 'react';

import { Container, LineTop, LineCenter, LineBottom } from './styles';

const MenuMobileAction = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <Container
      onClick={() => setMenuClicked(!menuClicked)}
      className={menuClicked && 'is-clicked'}
    >
      <LineTop className={menuClicked && 'is-animated'} />
      <LineCenter className={menuClicked && 'hide'} />
      <LineBottom className={menuClicked && 'is-animated'} />
    </Container>
  );
};

export default MenuMobileAction;
