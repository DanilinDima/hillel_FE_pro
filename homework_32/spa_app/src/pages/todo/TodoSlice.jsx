import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchTodos: () => {},
    setTodos: (state, action) => {
      state.items = action.payload;
    },
    addTodo: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload, completed: false });
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    editTodo: (state, action) => {
  const { id, text } = action.payload;
  const todo = state.items.find((t) => t.id === id);
  if (todo) {
    todo.text = text;
  }
},
    clearTodos: (state) => {
      state.items = [];
    },
  },
});

export const {
  fetchTodos,
  setTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  clearTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
