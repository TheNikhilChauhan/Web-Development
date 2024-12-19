let textArea = document.getElementById("textArea");
let addButton = document.getElementById("addButton");
let todoList = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("tasks")) || [];
todos.forEach((todo) => renderTask(todo));

addButton.addEventListener("click", () => {
  const text = textArea.value.trim();
  console.log(text);
  if (text === "") return;

  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false,
  };

  todos.push(newTodo);
  console.log(todos);
  saveTask();

  renderTask(newTodo);
  textArea.value = "";
});

function renderTask(task) {
  const li = document.createElement("li");
  li.setAttribute("data-id", task.id);
  li.innerHTML = `
    <span>${task.text}</span>
    <button class="delete-btn">Delete</button>
    `;

  if (task.completed) {
    li.classList.add("completed");
  }

  li.addEventListener("click", () => toggleTaskCompletion(task, li));

  li.querySelector(".delete-btn").addEventListener("click", (e) =>
    handleDeleteTask(e, task, li)
  );

  todoList.appendChild(li);
}

function toggleTaskCompletion(task, li) {
  //toggle completed state
  task.completed = !task.completed;

  //toggle css class
  li.classList.toggle("completed");

  saveTask();
}

// Handle task deletion with transition
function handleDeleteTask(e, task, li) {
  e.stopPropagation();

  li.classList.toggle("completed");

  //add fade out class
  li.classList.add("fade-out");

  //remove task from DOM
  li.addEventListener("transitionend", () => {
    li.remove();
    todos = todos.filter((t) => t.id !== task.id);

    saveTask();
  });
}

function saveTask() {
  localStorage.setItem("tasks", JSON.stringify(todos));
}
