const express = require("express");
const cors = require("cors");
const app = express();

const todosRoutes = require("./routes/routes");

app.use(cors());
app.use(express.json());

app.use("/api/todos", todosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
