import React from 'react';
import WeightComparison from './WeightComparison';

const Recap = () => {
  return (
    <div className="recap-container">
      <div className="recap-congrats">
        <p>Great job with your workout!</p>
      </div>
      <div className="recap-weights">XXXX</div>
      <WeightComparison />
    </div>
  );
};

export default Recap;
