import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExercisesThunk } from "../store/exercises";

const AllExercises = () => {
  const exercises = useSelector((state) => state.AllExercises);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExercisesThunk());
  }, []);

  return (
    <div>
      <h1>Choose a Muscle Group To Get Started!</h1>
    </div>
  );
};

export default AllExercises;
