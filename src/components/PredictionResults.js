import React from 'react';
import './PredictionResults.css';

const ProgressBar = ({ value, color, label }) => (
  <div className="progress-bar-container">
    <div className="progress-bar-label">{label}</div>
    <div className="progress-bar-bg">
      <div
        className="progress-bar-fill"
        style={{ width: `${value * 100}%`, background: color }}
      >
        <span className="progress-bar-value">{Math.round(value * 100)}%</span>
      </div>
    </div>
  </div>
);

const PredictionResults = ({ prediction }) => {
  if (!prediction) return null;

  return (
    <div className="prediction-results-card">
      <h3>Prediction Results</h3>
      <ProgressBar value={prediction.purchase_likelihood} color="#3a86ff" label="Purchase Likelihood" />
      <ProgressBar value={prediction.confidence} color="#8338ec" label="Confidence" />
      <div className="explanations-section">
        <h4>Explanations</h4>
        <ul className="explanations-list">
          {prediction.explanations.map((explanation, index) => (
            <li key={index} className="explanation-tag">{explanation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PredictionResults; 