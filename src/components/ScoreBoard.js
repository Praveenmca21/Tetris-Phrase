import React from 'react';

function ScoreBoard({ score, highScores, fastestTimes }) {
  return (
    <div className="scoreboard">
      <div className="score">
        <h2>Score</h2>
        <p>{score}</p>
      </div>
      <div className="high-scores">
        <h2>High Scores</h2>
        <ol>
          {highScores.map((highScore, index) => (
            <li key={index}>{highScore}</li>
          ))}
        </ol>
      </div>
      <div className="fastest-times">
        <h2>Fastest Times</h2>
        <ol>
          {fastestTimes.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ScoreBoard;
