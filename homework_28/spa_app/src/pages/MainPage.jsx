import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./css/MainPage.css";

export default function Main() {
    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem("todoItems")) || [];
    });

    useEffect(() => {
        localStorage.setItem("todoItems", JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (values, { resetForm }) => {
        const newTodo = {
            id: Date.now(),
            text: values.todoText,
            status: "undone",
        };
        setTodos([...todos, newTodo]);
        resetForm();
    };

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleStatus = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          status: todo.status === "done" ? "undone" : "done",
                      }
                    : todo
            )
        );
    };

    const validationSchema = Yup.object({
        todoText: Yup.string()
            .min(5, "Minimum 5 characters required")
            .required("This field is required"),
    });

    return (
        <div id="todo-container">
            <h1 className="todo-title">TO-DO LIST</h1>

            <ul id="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <div className="li-content">
                            <span
                                className={
                                    todo.status === "done" ? "strike" : ""
                                }
                            >
                                {todo.text}
                            </span>
                            <span>
                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(todo.id)}
                                >
                                    Delete
                                </button>
                                <span>
                                    <input
                                        type="checkbox"
                                        checked={todo.status === "done"}
                                        onChange={() => toggleStatus(todo.id)}
                                    />
                                    <span
                                        className={`task-status ${
                                            todo.status === "undone"
                                                ? "undone"
                                                : ""
                                        }`}
                                    >
                                        Done
                                    </span>
                                </span>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>

            <div id="todo-add-container">
                <Formik
                    initialValues={{ todoText: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleAddTodo}
                >
                    <Form>
                        <div id="todo-add-container">
                            <div>
                                <Field
                                    type="text"
                                    name="todoText"
                                    placeholder="Add a new todo"
                                />
                                <ErrorMessage
                                    name="todoText"
                                    component="p"
                                    id="add-alert-msg"
                                />
                            </div>
                            <div>
                                <button id="add-todo-btn" type="submit">
                                    Add To-Do
                                </button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
