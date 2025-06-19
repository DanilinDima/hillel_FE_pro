import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Root from "./layout/root";
import Main from "./pages/MainPage";
import Contacts from "./pages/Contacts";
import About from "./pages/about";
import ErrorFallback from "./components/ErrorBoundary";
import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import {store} from "./components/store";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorFallback />,
        children: [
            { index: true, element: <Main />, errorElement: <ErrorFallback /> },
            {
                path: "contacts",
                element: <Contacts />,
                errorElement: <ErrorFallback />,
            },
            {
                path: "about",
                element: <About />,
                errorElement: <ErrorFallback />,
            },
            {
                path: "*",
                element: (
                    <NotFound/>
                ),
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <Provider store={store}><RouterProvider router={router} /></Provider>
    
);
