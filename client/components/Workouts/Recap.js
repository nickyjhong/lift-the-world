import React from "react";
import WeightComparison from "./WeightComparison";
import { WorkoutSummary } from "./WorkoutSummary";

const Recap = () => {
  return (
    <div className="recap-container">
      <div className="recap-congrats">
        <h4>Great job with your workout!</h4>
      </div>
      <WorkoutSummary />
      <WeightComparison />
    </div>
  );
};

export default Recap;
