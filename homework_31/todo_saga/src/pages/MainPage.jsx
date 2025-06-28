import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
  fetchTodos,
  clearTodos,
} from "../components/MainPageSlice";
import "../styles/main.css";
import { useState, useRef } from "react";

export default function Main() {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const [editingTodo, setEditingTodo] = useState(null);
  const formRef = useRef(null); 

  const handleSubmit = (values, { resetForm }) => {
    if (editingTodo) {
      dispatch(editTodo({ id: editingTodo.id, text: values.todoText }));
      setEditingTodo(null);
    } else {
      dispatch(addTodo(values.todoText));
    }
    resetForm();
  };

  const handleEditClick = (todo) => {
    setEditingTodo(todo);

        setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100); 
  };

  const validationSchema = Yup.object({
    todoText: Yup.string().min(3, "Minimum 3 characters").required("Required"),
  });

  return (
    <div className="todo-container">
      <h1>TODO App</h1>

      <div className="todo-header">
        <button onClick={() => dispatch(fetchTodos())}>Load from API</button>
        <button onClick={() => dispatch(clearTodos())}>Clear All</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className={todo.completed ? "done" : ""}>{todo.text}</span>
            <div className="todo-actions">
              <button onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.completed ? "Undone" : "Done"}
              </button>
              <button onClick={() => handleEditClick(todo)}>Edit</button>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <div ref={formRef}> {}
        <Formik
          enableReinitialize
          initialValues={{ todoText: editingTodo ? editingTodo.text : "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ resetForm }) => (
            <Form className="todo-form">
              <Field name="todoText" placeholder="Enter todo" />
              <ErrorMessage
                name="todoText"
                component="div"
                className="error"
              />
              <button type="submit">{editingTodo ? "Save" : "Add"}</button>
              {editingTodo && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingTodo(null);
                    resetForm();
                  }}
                >
                  Cancel
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
