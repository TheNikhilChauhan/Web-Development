import express from "express";
import { createTodo, updateTodo } from "./types.js";
import { Todo } from "./db.js";
const app = express();

app.use(express.json());
const PORT = 5000;

/* 
body{
title: stirng, description: string}
*/

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(400).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});
app.get("/todos", async function (req, res) {
  const response = await Todo.findAll();
  res.json({
    response,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    res.status(400).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  await Todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
