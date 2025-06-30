import { AppBar, Toolbar, Button, Stack, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function Header({ toggleTheme, mode }) {
  const theme = useTheme();

  const getNavStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: theme.palette.text.primary,
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" spacing={3}>
          <NavLink to="/" end style={getNavStyle}>
            Resume
          </NavLink>
          <NavLink to="/todo" style={getNavStyle}>
            Todo
          </NavLink>
          <NavLink to="/swapi" style={getNavStyle}>
            Swapi
          </NavLink>
        </Stack>
        <Button color="inherit" onClick={toggleTheme}>
          {mode === "light" ? "Dark" : "Light"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
