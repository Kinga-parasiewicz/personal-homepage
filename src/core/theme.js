const color = {
  scienceBlue: "#0366D6",
  blumine: "#1F5189",
  dodgerBlue: "#2188FF",
  shipCove: "#6D93BE",
  anakiwa: "#8CC2FF",
  tropicalBlue: "#CDE0F7",
  ironTransparent: "rgba(209, 213, 218, 0.3)",
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  porcelain: "#F2F3F4",
  mercury: "#E5E5E5",
  slateGray: "#6E7E91",
  doveGray: "#6D6D6D",
  tundora: "#414141",
  mineShaft: "#252525",
  mineShaftLighter: "#313131",
};

const common = {
  breakpoints: {
    mobileMax: 767,
    tabletVerticalMax: 991,
    tabletHorizontalMax: 1199,
  },
  boxShadow:
    "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
  borderRadiusSmall: "4px",
};

export const themeLight = {
  ...common,
  colors: {
    primary: color.scienceBlue,
    textPrimary: color.mineShaft,
    site: {
      background: color.whiteLilac,
      text: color.slateGray,
    },
    buttonLink: {
      text: color.white,
      border: color.ironTransparent,
      shadow: color.anakiwa,
    },
    boxBackground: color.white,
    headerLine: color.mercury,
    tile: {
      border: color.porcelain,
      borderHover: color.tropicalBlue,
      header: color.scienceBlue,
    },
    themeSwitch: {
      background: color.mercury,
      border: color.scienceBlue,
      icon: color.white,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    primary: color.dodgerBlue,
    textPrimary: color.white,
    site: {
      background: color.mineShaft,
      text: color.white,
    },
    buttonLink: {
      text: color.white,
      border: color.ironTransparent,
      shadow: color.shipCove,
    },
    boxBackground: color.mineShaftLighter,
    headerLine: color.tundora,
    tile: {
      border: color.tundora,
      borderHover: color.blumine,
      header: color.white,
    },
    themeSwitch: {
      background: color.doveGray,
      icon: color.mineShaft,
    },
  },
};
