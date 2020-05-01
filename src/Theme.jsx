import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    darkGrey: "#1F1B24",
    lightGrey: "#263238",
    primaryPurple: "#BB86FC",
    primaryVariant: "3700B3",
    offWhite: "#EEEEEE",
    tomato: "#D84315",
    green: "#2E7D32",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
