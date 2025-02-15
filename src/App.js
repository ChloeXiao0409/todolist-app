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
      <TaskList tasks={filterTasks} setTasks={setTasks} />
    </div>
  )
}

export default App;
