import React from "react";
import { ThemeProvider, css } from "styled-components";
import { useWindowSize } from "../../../hooks";

const breakpoints = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
};

export const query = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

const theme = {
  logoContainerHeight: 120,
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
  },

  tagColor: {
    normal: "#474747",
    fighting: "#995e11",
    flying: "#078",
    poison: "#4a0c6e",
    ground: "#5f3c08",
    rock: "#695a45",
    bug: "#389712",
    ghost: "#45385a",
    steel: "#60777a",
    fire: "#7e1c1c",
    water: "#173e88",
    grass: "#0e5f1b",
    electric: "#d3b21f",
    psychic: "#a2aa5d",
    ice: "#598cb6",
    dragon: "#20b37b",
    dark: "#233235",
    fairy: "#c437d1",
    unknown: "#666666",
    shadow: "#1c2a2c",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  titleSizes: {
    1: "48px",
    2: "38px",
    3: "28px",
    4: "18px",
    5: "8px",
  },
};

export const Theme = ({ children }) => {
  const { windowSize } = useWindowSize();

  return (
    <ThemeProvider theme={{ ...theme, query, windowSize }}>
      {children}
    </ThemeProvider>
  );
};
