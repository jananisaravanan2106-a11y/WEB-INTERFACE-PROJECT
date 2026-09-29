import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./header.jsx";
import Home from "./home.jsx";
import Todo from "./todo.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";

export const TodoContext = createContext();

function App() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, priority) => {

    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title,
      priority: priority,
      completed: false,
      date: new Date().toLocaleDateString()
    };

    setTasks(prev => [newTask, ...prev]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const editTask = (id) => {

    const task = tasks.find(task => task.id === id);

    const newTitle = prompt("Edit Task", task.title);

    if (newTitle && newTitle.trim()) {
      setTasks(prev =>
        prev.map(task =>
          task.id === id
            ? { ...task, title: newTitle }
            : task
        )
      );
    }
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        completeTask,
        editTask,
        darkMode,
        setDarkMode
      }}
    >

      <BrowserRouter>

        <div className={darkMode ? "app dark" : "app"}>

          <Header />

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/todo" element={<Todo />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

          </Routes>

        </div>

      </BrowserRouter>

    </TodoContext.Provider>
  );
}

export default App;