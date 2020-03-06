import React from 'react';

import { Helmet } from 'react-helmet';

const HelmetTitleAndFavicon = ({ pageTitle }) => (
  <Helmet>
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <title>{pageTitle}</title>
  </Helmet>
);

export default HelmetTitleAndFavicon;
