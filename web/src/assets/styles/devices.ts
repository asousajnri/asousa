export const breakpoints = {
  mobile: "460px",
  tablet: "600px",
  tablet_landscape: "900px",
  desktop: "1200px",
  widescreen: "1408px",
  fullhd: "1608px",
};

export const devices = {
  mobile: `(min-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  tablet_landscape: `(min-width: ${breakpoints.tablet_landscape})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  widescreen: `(min-width: ${breakpoints.widescreen})`,
  fullhd: `(min-width: ${breakpoints.fullhd})`,
};
