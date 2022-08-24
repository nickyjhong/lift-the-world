import React from "react";
import { Link } from "react-router-dom";

const MuscleGroups = () => {
  return (
    <div className="musclegroup-container">
      <h1 className="musclegroup-heading">Choose a Muscle Group To Get Started!</h1>
      <div className="musclegroup-btn-container">

        <div className="musclegroup-link-btn">
          <Link to="/musclegroups/chest" className="musclegroup-btn-link">
            <button className="musclegroup-btn">Chest</button>
          </Link>
        </div>

        <div className="musclegroup-link-btn">
          <Link to="/musclegroups/back" className="musclegroup-btn-link">
            <button className="musclegroup-btn">Back</button>
          </Link>
        </div>

        <div className="musclegroup-link-btn">
          <Link to="/musclegroups/biceps" className="musclegroup-btn-link">
            <button className="musclegroup-btn">Biceps</button>
          </Link>
        </div>

        <div className="musclegroup-link-btn">
          <Link to="/musclegroups/triceps" className="musclegroup-btn-link">
            <button className="musclegroup-btn">Triceps</button>
          </Link>
        </div>

        <div className="musclegroup-link-btn">
          <Link to="/musclegroups/legs" className="musclegroup-btn-link">
            <button className="musclegroup-btn">Legs</button>
          </Link>
        </div>

        <div className="musclegroup-link-btn">
          <Link to="/musclegroups/glutes" className="musclegroup-btn-link">
            <button className="musclegroup-btn">Glutes</button>
          </Link>
        </div>

        <div className="musclegroup-link-btn">
          <Link to="/musclegroups/core" className="musclegroup-btn-link">
            <button className="musclegroup-btn">Core</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MuscleGroups;
