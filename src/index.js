import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./index.css";

/**
 * Allow for customizing the theme modes
 * @param {PaletteMode} mode
 */
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          background: {
            gradient: {
              radial:
                "radial-gradient(circle, #4e6aa9, #4d6eb0, #4c72b7, #4b76be, #4a7ac5)",
            },
          },
        }
      : {
          // palette values for dark mode
          background: {
            default: "#282c34",
            paper: "#282c34",
            gradient: {
              linear:
                "linear-gradient(to right bottom, #b32375, #9a2d7f, #7f3583, #633a83, #463c7e, #334381, #1d4981, #004e7e, #005c83, #006883, #00747e, #0d7e77)",
              radial:
                "radial-gradient(circle, #051937, #09173e, #151443, #230d47, #310047)",
              radial2:
                "radial-gradient(circle, #0a2e63, #17265e, #221c58, #2a1050, #310047)",
            },
          },
        }),
  },
});

/**
 * Context to manage the theme mode, allows
 * for other components to change the theme mode
 * by calling ColorModeContext.toggleColorMode
 */
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const Main = () => {
  const localMode = localStorage.getItem("mode");
  const [mode, setMode] = React.useState(localMode ? localMode : "light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === "light" ? "dark" : "light";
        localStorage.setItem("mode", newMode);
        setMode(newMode);
      },
    }),
    [mode],
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
