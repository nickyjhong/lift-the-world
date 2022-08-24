import React from "react";
import { Link } from "react-router-dom";

const MuscleGroups = () => {
  return (
    <div>
      <h1>Choose a Muscle Group To Get Started!</h1>
      <div className="musclegroup-btn-container">
        <Link to="/musclegroups/chest" className="musclegroup-btn-link">
          <button className="musclegroup-btn">Chest</button>
        </Link>

        <Link to="/musclegroups/back" className="musclegroup-btn-link">
          <button className="musclegroup-btn">Back</button>
        </Link>

        <Link to="/musclegroups/biceps" className="musclegroup-btn-link">
          <button className="musclegroup-btn">Biceps</button>
        </Link>

        <Link to="/musclegroups/triceps" className="musclegroup-btn-link">
          <button className="musclegroup-btn">Triceps</button>
        </Link>

        <Link to="/musclegroups/legs" className="musclegroup-btn-link">
          <button className="musclegroup-btn">Legs</button>
        </Link>

        <Link to="/musclegroups/glutes" className="musclegroup-btn-link">
          <button className="musclegroup-btn">Glutes</button>
        </Link>
        <Link to="/musclegroups/core" className="musclegroup-btn-link">
          <button className="musclegroup-btn">Core</button>
        </Link>
      </div>
    </div>
  );
};

export default MuscleGroups;
