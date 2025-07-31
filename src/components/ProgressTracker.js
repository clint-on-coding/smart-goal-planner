import React, { useEffect, useState } from 'react';

function ProgressTracker() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const goals = JSON.parse(localStorage.getItem('goals')) || [];
    const total = goals.length;
    const complete = goals.filter((g) => g.complete).length;
    const percent = total === 0 ? 0 : Math.round((complete / total) * 100);
    setProgress(percent);
  }, []);

  return (
    <div>
      <h2>📊 Progress: {progress}%</h2>
      <progress value={progress} max="100" />
    </div>
  );
}

export default ProgressTracker;
