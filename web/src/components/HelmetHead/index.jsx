import React from 'react';

import { Helmet } from 'react-helmet';

import favicon from '../../assets/images/favicon.ico';

const HelmetTitleAndFavicon = ({ pageTitle, children }) => (
  <Helmet>
    <link rel="icon" href={favicon} />
    <title>{pageTitle}</title>

    {children}
  </Helmet>
);

export default HelmetTitleAndFavicon;
