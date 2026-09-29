import React, { useContext, useState } from "react";
import { TodoContext } from "./App.jsx";

function Todo() {

  const {
    tasks,
    addTask,
    deleteTask,
    completeTask,
    editTask
  } = useContext(TodoContext);

  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("Medium");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const completed = tasks.filter(
    task => task.completed
  ).length;

  const pending = tasks.length - completed;

  const progress =
    tasks.length > 0
      ? Math.round((completed / tasks.length) * 100)
      : 0;

  const handleSubmit = (e) => {

    e.preventDefault();

    if (input.trim()) {

      addTask(input, priority);

      setInput("");

      setPriority("Medium");
    }
  };

  const filteredTasks = tasks.filter(task => {

    const matchesSearch =
      task.title.toLowerCase().includes(
        search.toLowerCase()
      );

    const matchesFilter =
      filter === "All"
        ? true
        : filter === "Pending"
        ? !task.completed
        : task.completed;

    return matchesSearch && matchesFilter;
  });

  return (
    <main className="todo-page">

      <h1>My Task Dashboard</h1>

      <p>Stay organized and productive 🚀</p>

      {/* Statistics */}

      <div className="stats">

        <div className="stat-card purple">
          <h2>{tasks.length}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="stat-card orange">
          <h2>{pending}</h2>
          <p>Pending</p>
        </div>

        <div className="stat-card green">
          <h2>{completed}</h2>
          <p>Completed</p>
        </div>

        <div className="stat-card blue">
          <h2>{progress}%</h2>
          <p>Progress</p>
        </div>

      </div>

      {/* Progress */}

      <div className="panel">

        <div className="progress-title">

          <h2>Overall Progress</h2>

          <b>{progress}%</b>

        </div>

        <div className="progress-bar">

          <div
            style={{
              width: `${progress}%`
            }}
          ></div>

        </div>

      </div>

      {/* Add Task */}

      <div className="panel">

        <h2>Add New Task</h2>

        <form
          className="add-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Enter your task..."
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
          />

          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
          >

            <option value="Low">
              Low
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="High">
              High
            </option>

          </select>

          <button type="submit">
            Add Task
          </button>

        </form>

      </div>

      {/* Search + Filter */}

      <div className="controls">

        <input
          type="text"
          placeholder="🔍 Search tasks..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <button
          className={filter === "All" ? "active" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>

        <button
          className={filter === "Pending" ? "active" : ""}
          onClick={() => setFilter("Pending")}
        >
          Pending
        </button>

        <button
          className={filter === "Completed" ? "active" : ""}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>

      </div>

      {/* Task List */}

      <div className="panel">

        <h2>My Tasks</h2>

        {filteredTasks.length === 0 ? (

          <div className="empty">
            <h3>📋 No Tasks Found</h3>
            <p>Add a new task to get started.</p>
          </div>

        ) : (

          <div className="task-list">

            {filteredTasks.map(task => (

              <div
                className={
                  task.completed
                    ? "task-card completed"
                    : "task-card"
                }
                key={task.id}
              >

                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() =>
                    completeTask(task.id)
                  }
                />

                <div className="task-content">

                  <h3>{task.title}</h3>

                  <p>
                    📅 {task.date}
                  </p>

                </div>

                <span
                  className={
                    task.priority === "High"
                      ? "priority high"
                      : task.priority === "Medium"
                      ? "priority medium"
                      : "priority low"
                  }
                >
                  {task.priority}
                </span>

                <button
                  className="edit-btn"
                  onClick={() =>
                    editTask(task.id)
                  }
                >
                  ✏️
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteTask(task.id)
                  }
                >
                  🗑️
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}

export default Todo;