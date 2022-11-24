import React, { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./theme.style";
import { GlobalStyle } from "./global.style";
import { useThemeContext } from "../context/theme.context";

export const StyleProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { isDarkMode } = useThemeContext();
  const theme = isDarkMode ? themeDark : themeLight;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
