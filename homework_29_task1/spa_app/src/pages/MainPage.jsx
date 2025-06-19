import "./css/MainPage.css";

import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addTodo } from "../components/MainPageSlice";


export default function Main() {
    const todos = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();

    const handleAddTodo = (values, { resetForm }) => {
        dispatch(addTodo(values.todoText));
        resetForm();
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
                            <span>{todo.text}</span>
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

            <footer>
                Total items: {todos.length}
            </footer>
        </div>
    );
}
