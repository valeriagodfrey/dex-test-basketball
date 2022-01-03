export const mediaWidths = {
  desktop: 1024,
  largeDesktop: 1200,
};

export const media = {
  desktop: `@media screen and (min-width: ${mediaWidths.desktop + 1}px)`,
  largeDesktop: `@media screen and (min-width: ${mediaWidths.largeDesktop + 1}px)`,
};
