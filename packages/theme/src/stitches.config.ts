import * as stitches from "@stitches/react";
import type * as Stitches from "@stitches/react";
import * as tokens from "./tokens";
export type { VariantProps } from "@stitches/react";

const prefix = "nf";

const NFDS = stitches.createStitches({
  prefix,
  theme: {
    colors: {
      ...tokens.light,
      // ...tokens.staticColors,
      //...tokens.defaultTheme,
    },
    sizes: {},
    space: {},
    radii: {},
    fonts: {},
    fontSizes: {},
    fontWeights: {},
    shadows: {},
    zIndices: {},
    lineHeights: {},
    transitions: {},
    borderStyles: {},
    borderWidths: {},
    letterSpacings: {},
  },
  media: {
    sm: "(max-width: 767px)",
    md: "(min-width: 768px) and (max-width: 899px)",
    lg: "(min-width: 900px) and (max-width: 1023px)",
    xl: "(min-width: 1024px) and (max-width: 1279px)",
    xxl: "(min-width: 1280px) and (max-width: 1440px)",
    notSm: "(min-width: 768px)",
    notMd: "(min-width: 900px)",
    notLg: "(min-width: 1024px)",
    notXl: "(min-width: 1440px)",
    motion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
  utils: {
    px: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    my: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mx: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    size: (value: Stitches.PropertyValue<"width" | "height">) => ({
      width: value,
      height: value,
    }),
  },
});

export type CSS = stitches.CSS<typeof NFDS>;
export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  reset,
} = NFDS;
export const utils = config.utils;

export const globalStyles = globalCss({
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Inter:wght@200;300;400;500;600&display=swap');",
  ],
  ":root": {
    "--base": `${tokens.base}`,
    fontSize: `${tokens.base}`,
  },
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    overflowX: "hidden",
    "-webkit-font-smoothing": "antialiased",
    textRendering: "optimizeLegibility",
    textSizeAdjust: "100%",
  },
  body: {
    margin: 0,
    fontFamily: "$body",
  },
});
