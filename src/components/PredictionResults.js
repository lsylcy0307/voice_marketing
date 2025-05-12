import React from 'react';
import './PredictionResults.css';

const PredictionResults = ({ prediction }) => {
  if (!prediction) return null;

  return (
    <div className="prediction-results">
      <h3>Prediction Results</h3>
      <p>Purchase Likelihood: {prediction.purchase_likelihood * 100}%</p>
      <p>Confidence: {prediction.confidence * 100}%</p>
      <h4>Explanations:</h4>
      <ul>
        {prediction.explanations.map((explanation, index) => (
          <li key={index}>{explanation}</li>
        ))}
      </ul>
    </div>
  );
};

export default PredictionResults; 