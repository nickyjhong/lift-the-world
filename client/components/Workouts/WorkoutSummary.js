import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkoutlist } from "../../store/workoutlist";

export const WorkoutSummary = () => {
  const dispatch = useDispatch();
  const workoutlist = useSelector((state) => state.workoutlist);

  useEffect(() => {
    dispatch(fetchWorkoutlist());
  }, []);

  if (
    !workoutlist.allExercises.exercises ||
    workoutlist.allExercises.exercises.length === 0
  ) {
    return <div>Loading...</div>;
  }

  const { allExercises } = workoutlist || [];

  return (
    <div className="workout-summary-container">
      <div className="workout-summary-headings">
        <p className="workout-summary-heading">Name</p>
        <p className="workout-summary-heading">Weight</p>
      </div>
      <div className="workout-info-container-main">
        {allExercises.exercises.map((exercise) => {
          return (
            <div className="workout-info-container" key={exercise.id}>
              <p className="workout-exercise-info-name"> {exercise.workoutlist.sets.reduce((acc, curr) => {
                  return (acc += parseInt(curr.reps));
                }, 0)} x {exercise.name}</p>
              <p className="workout-exercise-info-total">
                {exercise.workoutlist.sets.reduce((acc, curr) => {
                  return (acc += parseInt(curr.reps * curr.weight));
                }, 0)} lbs
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
