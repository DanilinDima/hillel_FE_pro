import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import {
    ChakraProvider,
    createSystem,
    defaultConfig,
    defineConfig,
} from "@chakra-ui/react";
import Root from "./layout/root.jsx";
import About from "./pages/About.jsx";
import BookingForm from "./pages/Booking.jsx";
import ErrorFallback from "./components/ErrorBoundary.jsx";
import NotFound from "./components/NotFound.jsx";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {},
        },
    },
});

const system = createSystem(defaultConfig, config);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorFallback />,
        children: [
            {
                index: true,
                element: <BookingForm />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

const root = document.getElementById("root");

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ChakraProvider value={system} theme={config.theme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    </StrictMode>
);
