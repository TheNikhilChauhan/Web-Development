import express from "express";
import { createTodo, updateTodo } from "./types";
const app = express();

app.use(express.json());
const PORT = 5000;

/* 
body{
title: stirng, description: string}
*/

app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(400).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
});
app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    res.status(400).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
});

app.listen(() => {
  console.log(`Server is running at ${PORT}`);
});
