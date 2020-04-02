import React from 'react';

import { Helmet as HelmetContainer } from 'react-helmet';

import favicon from '../../assets/images/favicon.ico';

const Helmet = ({ pageTitle, children }) => (
  <HelmetContainer>
    <link rel="icon" href={favicon} />
    <title>{pageTitle}</title>

    {children}
  </HelmetContainer>
);

export default Helmet;
