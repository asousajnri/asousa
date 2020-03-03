export const sizes = {
  mobile: '360px',
  tabletPortrait: '600px',
  tabletLandscape: '900px',
  desktop: '1280px',
  desktopBig: '1400px',
};

export default {
  mobile: `(min-width: ${sizes.mobile})`,
  tabletPortrait: `(min-width: ${sizes.tabletPortrait})`,
  tabletLandscape: `(min-width: ${sizes.tabletLandscape})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopBig: `(min-width: ${sizes.desktopBig})`,
};
