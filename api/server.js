const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const useCosmos = process.env.USE_COSMOS === "true";

let config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: false,
};

const connectionString = `mongodb://${process.env.DB_HOST}:${
  process.env.DB_PORT
}/${process.env.DB_NAME}${useCosmos ? "?ssl=true&replicaSet=globaldb" : ""}`;

if (useCosmos) {
  config = {
    auth: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    ...config,
  };
}

mongoose
  .connect(connectionString, config)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

const Todo = require("./models/ToDo");

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (ex) {
    res.status(500).send(ex);
  }
});

app.post("/todo/new", (req, res) => {
  try {
    const todo = new Todo({
      text: req.body.text,
    });
    todo.save();
    res.json(todo);
  } catch (ex) {
    res.status(500).send(ex);
  }
});

app.delete("/todo/delete/:id", async (req, res) => {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
  } catch (ex) {
    res.status(500).send(ex);
  }
});

app.get("/todo/complete/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.complete = !todo.complete;
    await todo.save();
    res.json(todo);
  } catch (ex) {
    res.status(500).send(ex);
  }
});

app.listen(3001, () => console.log("Server started on port 3001"));
//draft 3002 for testing purposes
