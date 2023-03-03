import React from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Routers from "./Routes";
import { store } from "./store";
import { Provider } from "react-redux";

const App = () => {
  const theme = createTheme({
    typography: {
      fontSize: 12,
      fontFamily: "Inria Sans",
    },
    link: { fontFamily: ["Inria Sans", "sans- serif"].join(",") },
    palette: {
      primary: {
        main: "#9D78BD",
      },
      light: {
        main: "#ffffff",
      },
      dark: {
        main: "#000000",
      },
    },
  });
  // theme.typography.h5 = {
  //   fontSize: "1rem",
  //   "@media (min-width:600px)": {
  //     fontSize: "1.1rem",
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     fontSize: "1.2rem",
  //   },
  // };
  // theme.typography.body2 = {
  //   fontSize: "12px",
  // };
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routers />
        </ThemeProvider>
      </Provider>
    </div>
  );
};
export default App;
