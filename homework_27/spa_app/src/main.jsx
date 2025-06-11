
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Root from "./layout/root";
import Main from "./pages/MainPage";
import Contacts from "./pages/Contacts";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Main /> },
      { path: "contacts", element: <Contacts /> },
      { path: "about", element: <About /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


