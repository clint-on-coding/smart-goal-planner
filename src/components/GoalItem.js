import React from 'react';

function GoalItem({ goal }) {
  const toggleComplete = () => {
    const savedGoals = JSON.parse(localStorage.getItem('goals')) || [];
    const updated = savedGoals.map((g) =>
      g.id === goal.id ? { ...g, complete: !g.complete } : g
    );
    localStorage.setItem('goals', JSON.stringify(updated));
    window.location.reload();
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={goal.complete}
        onChange={toggleComplete}
      />
      <span style={{ textDecoration: goal.complete ? 'line-through' : 'none' }}>
        {goal.text}
      </span>
    </div>
  );
}

export default GoalItem;
