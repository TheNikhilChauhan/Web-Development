document.addEventListener("DOMContentLoaded", () => {
  let taskInput = document.getElementById("typeArea");

  let list = document.getElementById("taskList");

  let addButton = document.getElementById("addButton");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTask(task));

  addButton.addEventListener("click", function () {
    console.log("Inside click function");

    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    console.log(taskText);

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    taskInput.value = "";
    console.log(tasks);
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `<span>${task.text}</span>
    <button>Delete</button>
    `;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      tasks.completed = !tasks.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); //prevent toggle from firing
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
    });

    list.appendChild(li);
  }

  //add to local storage

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
