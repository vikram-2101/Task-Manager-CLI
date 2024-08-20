---

# Task Manager CLI

A simple command-line application to manage your to-do list. You can add, update, delete, and list tasks, with each task having properties like description, status, creation date, and update date.

- Project URL https://github.com/vikram-2101/Task-Manager-CLI

## Features

- Add a new task
- Update an existing task's description or status
- Delete a task
- List all tasks
- Filter tasks by status (`todo`, `in-progress`, `done`)

## Requirements

- [Node.js](https://nodejs.org/) (v14.x or higher)
- npm (comes with Node.js)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/todo-cli.git
   cd todo-cli
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Make the script executable (for Unix-based systems like Linux and macOS):**

   ```bash
   chmod +x index.js
   ```

## Usage

### Running the Script Directly

You can run the script using `node` on any operating system:

```bash
node index.js <command> [options]
```

### Global Installation (Optional)

To use the CLI tool globally, you can set it up as a global command:

1. **Add the `"bin"` field to your `package.json`:**

   ```json
   "bin": {
     "todo": "./index.js"
   }
   ```

2. **Install the package globally:**

   ```bash
   npm install -g .
   ```

   After this, you can use the command `todo` instead of `node index.js`.

## Commands

### 1. Add a Task

```bash
node index.js add "Your task description here"
```

**Example:**

```bash
node index.js add "Buy groceries"
```

### 2. Update a Task

```bash
node index.js update <task_id> [options]
```

**Options:**

- `-d, --description <description>`: Update the task description
- `-s, --status <status>`: Update the task status (`todo`, `in-progress`, `done`)

**Example:**

```bash
node index.js update <task_id> -d "Buy groceries and milk" -s "in-progress"
```

### 3. Delete a Task

```bash
node index.js delete <task_id>
```

**Example:**

```bash
node index.js delete <task_id>
```

### 4. List All Tasks

```bash
node index.js list
```

**Example:**

```bash
node index.js list
```

### 5. List Tasks by Status

```bash
node index.js list -s <status>
```

**Example:**

```bash
node index.js list -s "done"
```

### 6. Help

To see a list of all available commands and options:

```bash
node index.js --help
```

## Cross-Platform Notes

- **Unix-based Systems (Linux/macOS):**  
  You can use `chmod +x index.js` to make the script executable and run it directly using `./index.js <command>`.

- **Windows:**  
  On Windows, use `node index.js <command>` to run the script. Alternatively, you can set up the tool globally as described above.

## JSON File Storage

Tasks are stored in a `tasks.json` file located in the same directory as the script. The file is automatically created if it doesn't exist.

## Contributing

Feel free to submit issues and pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
