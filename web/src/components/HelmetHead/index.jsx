import React from 'react';

import { Helmet } from 'react-helmet';

const HelmetTitleAndFavicon = ({ pageTitle, children }) => (
  <Helmet>
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <title>{pageTitle}</title>

    {children}
  </Helmet>
);

export default HelmetTitleAndFavicon;
