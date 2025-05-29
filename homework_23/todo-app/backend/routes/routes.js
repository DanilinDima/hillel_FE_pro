const express = require("express");
const router = express.Router();

let TODOS = require("../data/db");

router.get("/", (req, res) => {
  res.json(TODOS);
});

router.post("/", (req, res) => {
  const { title, userId, completed } = req.body;
  const newTodo = {
    id: Date.now(),
    userId: userId || 1,
    title,
    completed: completed || false,
  };
  TODOS.push(newTodo);
  res.status(201).json(newTodo);
});

router.put("/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const index = TODOS.findIndex(todo => todo.id === todoId);

  if (index !== -1) {
    TODOS[index] = { ...TODOS[index], ...req.body };
    res.json(TODOS[index]);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

router.delete("/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  TODOS = TODOS.filter(todo => todo.id !== todoId);
  res.status(204).send();
});

module.exports = router;
