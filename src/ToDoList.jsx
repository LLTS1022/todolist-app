import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Eat", "Sleep", "Code"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i!== index));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const newTasks = [...tasks];
      [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
      setTasks(newTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
      setTasks(newTasks);
    }
  };

  return (
   
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        <article></article>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            moveTaskUp={moveTaskUp}
            moveTaskDown={moveTaskDown}
          />
        ))}
      </ol>
    </div>
   
  );
}

function Task({ task, index, deleteTask, moveTaskUp, moveTaskDown }) {
  return (
    <li>
      <span className="text">{task}</span>
      <button className="delete-button" onClick={() => deleteTask(index)}>
        ❌
      </button>
      <button className="move-button" onClick={() => moveTaskUp(index)}>
        ⬆️
      </button>
      <button className="move-button" onClick={() => moveTaskDown(index)}>
        ⬇️
      </button>
    </li>
  );
}

export default ToDoList;