import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../pages/todo/TodoSlice";
import swapiReducer from "../pages/swapi/swapiSlice";
import rootSaga from "./saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        swapi: swapiReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),

});
sagaMiddleware.run(rootSaga);