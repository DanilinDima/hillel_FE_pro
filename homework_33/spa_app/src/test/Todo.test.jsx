import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../pages/todo/TodoSlice"; 
import Todo from "../pages/todo/Todo"; 


const createTestStore = () =>
  configureStore({
    reducer: {
      todos: todoReducer,
    },
  });

const renderWithProvider = (component) => {
  const store = createTestStore();
  return render(<Provider store={store}>{component}</Provider>);
};

describe("TODO App", () => {
  beforeEach(() => {
    renderWithProvider(<Todo />);
  });

  test("renders TODO App heading", () => {
    const heading = screen.getByText(/TODO App/i);
    expect(heading).toBeInTheDocument();
  });

  test("allows input of letters and numbers", async () => {
    const input = screen.getByLabelText(/Enter task/i);
    await userEvent.type(input, "Test123");
    expect(input).toHaveValue("Test123");
  });

  test("shows validation error when trying to submit empty input", async () => {
    const addButton = screen.getByRole("button", { name: /add/i });
    await userEvent.click(addButton);

    const error = await screen.findByText(/Required/i);
    expect(error).toBeInTheDocument();
  });

  test("adds a new todo item to the list", async () => {
    const input = screen.getByLabelText(/Enter task/i);
    const addButton = screen.getByRole("button", { name: /add/i });

    await userEvent.type(input, "Buy milk");
    await userEvent.click(addButton);

    const newItem = await screen.findByText("Buy milk");
    expect(newItem).toBeInTheDocument();
  });

  test("clears all todos when Clear All is clicked", async () => {
    const input = screen.getByLabelText(/Enter task/i);
    const addButton = screen.getByRole("button", { name: /add/i });

    await userEvent.type(input, "Temp task");
    await userEvent.click(addButton);

    const task = await screen.findByText("Temp task");
    expect(task).toBeInTheDocument();

    const clearButton = screen.getByRole("button", { name: /Clear All/i });
    await userEvent.click(clearButton);

    expect(screen.queryByText("Temp task")).not.toBeInTheDocument();
  });
});
