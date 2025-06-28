import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/MainPage";
import { Provider } from "react-redux";
import { store } from "./components/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Main />
  </Provider>
);
