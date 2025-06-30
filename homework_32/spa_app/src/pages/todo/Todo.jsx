import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
  fetchTodos,
  clearTodos,
} from "./TodoSlice";

import {
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Alert,
} from "@mui/material";

import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Replay as ReplayIcon,
  CloudDownload as CloudDownloadIcon,
  ClearAll as ClearAllIcon,
} from "@mui/icons-material";

export default function Todo() {
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
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        TODO App
      </Typography>

      <Stack direction="row" spacing={2} mb={3}>
        <Button
          variant="contained"
          startIcon={<CloudDownloadIcon />}
          onClick={() => dispatch(fetchTodos())}
        >
          Load from API
        </Button>
        <Button
          variant="outlined"
          color="error"
          startIcon={<ClearAllIcon />}
          onClick={() => dispatch(clearTodos())}
        >
          Clear All
        </Button>
      </Stack>

      <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
        <List>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              secondaryAction={
                <Stack direction="row" spacing={1}>
                  <IconButton onClick={() => dispatch(toggleTodo(todo.id))}>
                    {todo.completed ? <ReplayIcon /> : <DoneIcon />}
                  </IconButton>
                  <IconButton onClick={() => handleEditClick(todo)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => dispatch(deleteTodo(todo.id))}>
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              }
            >
              <ListItemText
                primary={todo.text}
                sx={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "gray" : "inherit",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      <div ref={formRef}>
        <Formik
          enableReinitialize
          initialValues={{ todoText: editingTodo ? editingTodo.text : "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit, resetForm }) => (
            <Form onSubmit={handleSubmit}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Field
                  as={TextField}
                  label="Enter task"
                  name="todoText"
                  value={values.todoText}
                  onChange={handleChange}
                  fullWidth
                />
                <Button variant="contained" type="submit">
                  {editingTodo ? "Save" : "Add"}
                </Button>
                {editingTodo && (
                  <Button
                    variant="outlined"
                    color="warning"
                    onClick={() => {
                      setEditingTodo(null);
                      resetForm();
                    }}
                  >
                    Cancel
                  </Button>
                )}
              </Stack>
              <ErrorMessage
                name="todoText"
                component={(msg) => (
                  <Alert severity="error" sx={{ mt: 2 }}>
                    {msg.children}
                  </Alert>
                )}
              />
            </Form>
          )}
        </Formik>
      </div>
    </Box>
  );
}
