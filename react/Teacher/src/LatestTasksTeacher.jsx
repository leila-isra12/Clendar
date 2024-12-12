
import React, { useState } from "react";
import "./LatestTasksTeacher.css";
import Footer from "./Footer.jsx";
import { FaTrashAlt } from "react-icons/fa";

const LatestTasksInspector = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Finish Project", description: "Publish Academy Programming Project", dueDate: "2024-12-15", isCompleted: false },
    { id: 2, name: "Write Article", description: "Write Low Level vs High Level Languages", dueDate: "2024-12-12", isCompleted: true },
    { id: 3, name: "Finish Project", description: "Publish Academy Programming Project", dueDate: "2024-12-15", isCompleted: false },
    { id: 4, name: "Write Article", description: "Write Low Level vs High Level Languages", dueDate: "2024-12-12", isCompleted: true },
  ]);
  const [newTask, setNewTask] = useState({ name: "", description: "", dueDate: "" });

  const handleAddTask = () => {
    if (!newTask.name || !newTask.description || !newTask.dueDate) {
      alert("Please fill out all fields!");
      return;
    }
    const newTaskWithId = {
      id: tasks.length + 1, // Assign a unique ID
      ...newTask,
      isCompleted: false,
    };
    setTasks([...tasks, newTaskWithId]);
    setNewTask({ name: "", description: "", dueDate: "" });
  };

  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: true } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id); // Remove by ID
    setTasks(updatedTasks);
  };

  return (
    <div className="big-div">
    <div className="latest-tasks-containerT">
      <div className="right-sectionT">
        <h1 className="titleT">Latest Tasks</h1>
        <div className="task-listT">
          <h2>Task List</h2>
          {tasks
            .filter((task) => !task.isCompleted)
            .map((task) => (
              <div key={task.id} className="task-cardT">
                <h3>{task.name}</h3>
                <p>{task.description}</p>
                <p className="due-dateT">Due: {task.dueDate}</p>

                <button
                  onClick={() => handleCompleteTask(task.id)}
                  className="complete-btnT"
                >
                  Mark as Completed
                </button>
                <span
                  className="delete-iconT"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <FaTrashAlt size={19} />
                </span>
              </div>
            ))}
        </div>

        {/* Task History */}
        <div className="task-historyT">
          <h2>Task History</h2>
          {tasks
            .filter((task) => task.isCompleted)
            .map((task) => (
              <div key={task.id} className="task-card completed">
                <h3>{task.name}</h3>
                <p>{task.description}</p>
                <p className="due-date">Due: {task.dueDate}</p>
                <p className="status">Status: Completed</p>
              </div>
            ))}
        </div>
      </div>
      </div>
      <Footer/>
      </div>
  );
};

export default LatestTasksInspector;
