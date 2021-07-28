import { Homepage } from "./../features/homepage/index";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import {themeLight, themeDark } from "./theme";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../common/themeSlice";

export const App = ()=> {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
    <Homepage/>
    </ThemeProvider>
  );
}

