import React, { useState } from 'react';

function GoalForm() {
  const [goal, setGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!goal) return;

    const newGoal = {
      id: Date.now(),
      text: goal,
      complete: false
    };

    const existing = JSON.parse(localStorage.getItem('goals')) || [];
    localStorage.setItem('goals', JSON.stringify([...existing, newGoal]));
    setGoal('');
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new goal..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
