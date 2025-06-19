import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./MainPageSlice";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});
