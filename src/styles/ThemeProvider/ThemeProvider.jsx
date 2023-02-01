import React from "react";
import { ThemeProvider, css } from "styled-components";
import { useWindowSize } from "../../hooks";

//Main breakpoints
const breakpoints = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
};

//Media query function to be used later on component level.
//This will be merged later on themeProvider.
export const query = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

//This will provide the colors, fonts and sizes necessary across the application.
//This could also be improved to apply different "themes".
const theme = {
  logoContainerHeight: 120,

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
  titleSizes: {
    1: "48px",
    2: "38px",
    3: "28px",
    4: "18px",
    5: "8px",
  },
};

export const Theme = ({ children }) => {
  //Window size hook to make improvements on the application when needed
  const { windowSize } = useWindowSize();

  return (
    <ThemeProvider theme={{ ...theme, query, windowSize }}>
      {children}
    </ThemeProvider>
  );
};
