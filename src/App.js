import React, { useEffect, useState } from 'react';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import ProgressTracker from './components/ProgressTracker';
import './App.css';

function App() {
  const [goals, setGoals] = useState([]);

  // Fetch goals on mount
  useEffect(() => {
    fetch('http://localhost:3001/goals')
      .then((res) => res.json())
      .then((data) => setGoals(data));
  }, []);

  // Add a new goal
  function handleAddGoal(newGoal) {
    setGoals([...goals, newGoal]);
  }

  // Delete a goal
  function handleDeleteGoal(id) {
    fetch(`http://localhost:3001/goals/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setGoals(goals.filter((goal) => goal.id !== id));
    });
  }

  return (
    <div className="App">
      <h1>🎯 Smart Goal Planner</h1>
      <GoalForm onAddGoal={handleAddGoal} />
      <ProgressTracker goals={goals} />
      <GoalList goals={goals} onDelete={handleDeleteGoal} />
    </div>
  );
}

export default App;


