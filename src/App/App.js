import React from 'react';
import { Route, Routes, HashRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import color from '@mui/material/colors';

//Components
import Navbar from '../componets/navbar/navbar';
import ResponsiveAppBar from '../componets/navbar/muiAppBar';

//Pages
import Home from "../pages/Home/Home";
import Gallery from "../pages/Gallery/Gallery";


/**
 * Allow for customizing the theme modes
 * @param {PaletteMode} mode 
 */
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
      }
      : {
        // palette values for dark mode
        background: {
          default: "#282c34",
          paper: "#282c34",
        },
      }),
  },
});

/**
 * Context to manage the theme mode, allows
 * for other components to change the theme mode
 * by calling ColorModeContext.toggleColorMode
 */
export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export default function App() {
  // Setting and updating the theme mode (light/dark)
  const localMode = localStorage.getItem('mode');
  const [mode, setMode] = React.useState(localMode ? localMode : 'light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        localStorage.setItem('mode', newMode);
        setMode(newMode);
      },
    }),
    [mode],
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <div className="main" style={{ backgroundColor: theme.palette.background.default }}>
            {/* <Navbar className="navBar" /> */}
            <ResponsiveAppBar />
            <div className="content" style={{ height: 'calc(100vh - 48px' }}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/gallery" element={<Gallery />} />
              </Routes>
            </div>
          </div>
        </HashRouter >
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
