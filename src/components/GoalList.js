import React, { useState, useEffect } from 'react';
import GoalItem from './GoalItem';

function GoalList() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem('goals')) || [];
    setGoals(savedGoals);
  }, []);

  return (
    <div>
      <h2>📋 Your Goals</h2>
      {goals.length === 0 ? (
        <p>No goals yet!</p>
      ) : (
        goals.map((goal) => <GoalItem key={goal.id} goal={goal} />)
      )}
    </div>
  );
}

export default GoalList;
