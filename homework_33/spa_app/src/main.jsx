import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { useEffect, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createAppTheme } from "./theme/theme"; 

import Root from "./layout/root";
import SwapiView from "./pages/swapi/SwapiView";
import Todo from "./pages/todo/Todo";
import Resume from "./pages/resume/Resume";
import ErrorFallback from "./components/ErrorBoundary";
import NotFound from "./components/NotFound";

function ThemedApp() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setMode(saved);
  }, []);

  const toggleTheme = () => {
    const next = mode === "light" ? "dark" : "light";
    setMode(next);
    localStorage.setItem("theme", next);
  };

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root toggleTheme={toggleTheme} mode={mode} />,
      errorElement: <ErrorFallback />,
      children: [
        { index: true, element: <Resume /> },
        { path: "todo", element: <Todo /> },
        { path: "swapi", element: <SwapiView /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

createRoot(document.getElementById("root")).render(<ThemedApp />);
