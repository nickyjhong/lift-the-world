import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExercisesThunk } from "../store/exercises";
import { Link } from "react-router-dom";

const AllExercises = () => {
  const exercises = useSelector((state) => state.allExercises);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExercisesThunk());
  }, []);

  return (
    <div>
      <h1>Choose a Muscle Group To Get Started!</h1>
      <div className="exerciseCategory-btn-container">
        <button className="exerciseCategory-btn">
          <Link
            to="/dontKnowWhatThisIsYet"
            className="exerciseCategory-btn-link"
          >
            Chest
          </Link>
        </button>
        <button className="exerciseCategory-btn">
          <Link
            to="/dontKnowWhatThisIsYet"
            className="exerciseCategory-btn-link"
          >
            Back
          </Link>
        </button>
        <button className="exerciseCategory-btn">
          <Link
            to="/dontKnowWhatThisIsYet"
            className="exerciseCategory-btn-link"
          >
            Biceps
          </Link>
        </button>
        <button className="exerciseCategory-btn">
          <Link
            to="/dontKnowWhatThisIsYet"
            className="exerciseCategory-btn-link"
          >
            Triceps
          </Link>
        </button>
        <button className="exerciseCategory-btn">
          <Link
            to="/dontKnowWhatThisIsYet"
            className="exerciseCategory-btn-link"
          >
            Legs
          </Link>
        </button>
        <button className="exerciseCategory-btn">
          <Link
            to="/dontKnowWhatThisIsYet"
            className="exerciseCategory-btn-link"
          >
            Glutes
          </Link>
        </button>
        <button className="exerciseCategory-btn">
          <Link
            to="/dontKnowWhatThisIsYet"
            className="exerciseCategory-btn-link"
          >
            Core
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AllExercises;
