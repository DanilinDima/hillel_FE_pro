import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, CssBaseline } from "@mui/material";

export default function Root({ toggleTheme, mode }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header toggleTheme={toggleTheme} mode={mode} />
      <Box component="main" sx={{ flex: 1, p: 3 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
