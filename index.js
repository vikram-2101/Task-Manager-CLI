const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const { Command } = require("commander");
const program = new Command();
const path = require("path");

const TASKS_FILE = path.join(__dirname, "tasks.json");

// load tasks from json file
function loadTasks() {
  if (!fs.existsSync(TASKS_FILE)) {
    return [];
  }
  const data = fs.readFileSync(TASKS_FILE, "utf8");
  try {
    return JSON.parse(data);
  } catch (error) {
    console.log("Failed to parse tasks JSON:", error);
    return [];
  }
}

// save tasks to the json file
function saveTasks(tasks) {
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 4));
}

// add a new task
function addTask(description) {
  const tasks = loadTasks();
  const newTask = {
    id: uuidv4(),
    description,
    status: "todo",
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
  };
  tasks.push(newTask);
  saveTasks(tasks);
  console.log("Task added:", newTask);
}
// update an existing task
function updateTask(id, { description, status }) {
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    console.error("Task not found");
    return;
  }
  if (description) {
    task.description = description;
  }
  if (status) {
    task.status = status;
  }
  task.updatedAt = new Date().toISOString();
  saveTasks(task);
  console.log("Task updated:", task);
}

// delete a task
function deleteTask(id) {
  let tasks = loadTasks();
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks(tasks);
  console.log(`Task deleted: ${id}`);
}

// list all task
function listTasks(filter) {
  let tasks = loadTasks();
  const filteredTasks = tasks.filter((task) => {
    if (filter) return task.status === filter;
    return true;
  });
  console.log(filteredTasks);
}

// cli commands
program
  .command("add <description>")
  .description("Add a new task")
  .action(addTask);

program
  .command("update <id>")
  .description("Update a task")
  .option("-d, --description <description>", "Update description")
  .option("-s, --status <status>", "Update status")
  .action(updateTask);

program.command("delete <id>").description("Delete a task").action(deleteTask);

program
  .command("list")
  .description("List all tasks")
  .option("-s --status <status>", "Filter by status")
  .action(({ status }) => listTasks(status));

program.parse(process.argv);
