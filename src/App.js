import React, { useState, useEffect, use } from "react";
import TaskList from "./components/TaskList/TaskList";
import './App.scss';

const App = () => {
  // tasks -> objects store in the Array -> [{id: 1, text: "Task 1", completed: false}]
  const [tasks, setTasks] = useState([]);
  // newTask -> string to store the new task
  const [newTask, setNewTask] = useState("");
  // filter -> string to store the filter value - all, completed, incompleted
  const [filter, setFilter] = useState("all");
  // editingTaskId -> number to store the task id which is being edited
  const [editingTaskId, setEditingTaskId] = useState(null);
  // editText -> string to store the text of the task being edited
  const [editedText, setEditedText] = useState("");

  // Load tasks from localStorage when the app starts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) return setTasks(savedTasks);
  }, []);
  // Save tasks to localStorage when the tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // AddTask -> function to add new task to the tasks state
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false}]);
    setNewTask("");
  }

  // Start editing a task with save and cancel options
  const startEditing = (id, text) => {
    setEditingTaskId(id);
    setEditedText(text);
  }
  const saveEditedTask = () => {
    setTasks(tasks.map(task => task.id === editingTaskId ? {...task, text: editedText } : task));
    setEditingTaskId(null);
    setEditedText("");
  }
  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditedText("");
  }


  // Filter tasks based on the filter value
  const filterTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "incompleted") return !task.completed;
    return true;
  });

  return (
    <div className="container">
      <h2>To-do List App</h2>
      <input className="task-input" value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>
      <button className="add-btn" onClick={addTask}>➕ Add Task</button>
      <div className="filter-btns">
        <button onClick={() => setFilter("all")}>📋All</button>
        <button onClick={() => setFilter("completed")}>✅Completed</button>
        <button onClick={() => setFilter("incompleted")}>⏳Incompleted</button>
      </div>
      <TaskList 
        tasks={filterTasks} 
        setTasks={setTasks} 
        editingTaskId={editingTaskId}
        editedText={editedText}
        setEditedText={setEditedText}
        startEditing={startEditing}
        saveEditedTask={saveEditedTask}
        cancelEditing={cancelEditing}
      />
    </div>
  )
}

export default App;
