const fs = require("fs");
const filePath = "./tasks.json";

//add task

const loadTask = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTask = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadTask();
  tasks.push({ task });
  saveTask(tasks);
  console.log("Task added ", task);
};

const listTask = () => {
  const tasks = loadTask();
  tasks.forEach((t, index) => console.log(`${index + 1} - ${t.task}`));
};

const removeTask = (index) => {
  const tasks = loadTask();
  if (index < 1 || index > tasks.length) {
    console.log("Invalid index");
    return;
  }

  tasks.splice(index - 1, 1);
  saveTask(tasks);
  console.log(`Taks ${index} removed.`);
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTask();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found!");
}
