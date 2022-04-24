export const sizes = {
  laptop: '1024px',
  tablet: '768px',
  smallTablet: '600px',
  mobileS: '320px',
};

export default {
  sizes,
  laptop: `(max-width: ${sizes.laptop})`,
  tablet: `(max-width: ${sizes.tablet})`,
  smallTablet: `(max-width: ${sizes.smallTablet})`,
  mobileS: `(max-width: ${sizes.mobileS})`,
};
