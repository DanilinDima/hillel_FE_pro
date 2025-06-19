import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const MainPageSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: Date.now(),
                text: action.payload,
            });
        },
    },
});

export const { addTodo } = MainPageSlice.actions;
export default MainPageSlice.reducer;
