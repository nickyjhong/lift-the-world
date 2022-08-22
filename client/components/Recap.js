import React from 'react';
import WeightComparison from './WeightComparison';

const Recap = () => {
  return (
    <div className="recap-container">
      <div className="recap-congrats">
        <p>Great job with your workout!</p>
      </div>
      <div className="recap-weights">XXXX</div>
      <div className="recap-total-weight">
        <p>You lifted X pounds during this workout!</p>
        <p>That's the weight of X</p>
        <WeightComparison />
        <img />
      </div>
    </div>
  );
};

export default Recap;
