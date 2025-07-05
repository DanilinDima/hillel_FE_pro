import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                  primary: { main: "#439ffa" },
                  background: { default: "#f5f5f5", paper: "#fff" },
                  text: { primary: "#000" },
              }
            : {
                  primary: { main: "#90caf9" },
                  background: { default: "#121212", paper: "#1d1d1d" },
                  text: { primary: "#fff" },
              }),
    },
});

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode));
