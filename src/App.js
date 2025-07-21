import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then(res => res.json())
      .then(data => setGoals(data));
  }, []);

  const handleAdd = () => {
    if (!newGoal.trim()) return;

    const goalData = { title: newGoal, completed: false };

    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goalData),
    })
      .then(res => res.json())
      .then(addedGoal => {
        setGoals([...goals, addedGoal]);
        setNewGoal("");
      });
  };

  const toggleComplete = (goal) => {
    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !goal.completed }),
    })
      .then(res => res.json())
      .then(updatedGoal => {
        setGoals(goals.map(g => g.id === updatedGoal.id ? updatedGoal : g));
      });
  };

  return (
    <div className="container">
      <h1>Smart Goal Planner</h1>
      <input
        type="text"
        placeholder="Enter a new goal"
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
      />
      <button onClick={handleAdd}>Add Goal</button>
      <ul>
        {goals.map(goal => (
          <li key={goal.id} style={{ textDecoration: goal.completed ? "line-through" : "none" }}>
            <input
              type="checkbox"
              checked={goal.completed}
              onChange={() => toggleComplete(goal)}
            />
            {goal.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
