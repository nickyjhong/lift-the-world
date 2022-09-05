import React, { useEffect } from "react";
import { getPrevious } from "../../store/workout";
import { useSelector, useDispatch } from "react-redux";

export default function PreviousWorkouts() {
  const prevWorkouts = useSelector((state) => state.workout) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrevious());
  }, [dispatch]);

  function createDate(updatedAt) {
    let date = updatedAt.slice(0, 10);
    let newDate = date.split("-");
    let first = newDate.shift();
    newDate.push(first);
    let result = newDate.join("/");
    return result;
  }

  if (!prevWorkouts || !prevWorkouts[0] || prevWorkouts.length === 0) {
    return (
      <div className="no-previous-workouts-container">
        <p className="no-previous-workouts">No previous workouts exist yet!</p>
        <img src="/sprites/cat/cat-dead.gif" className="cat-dead" />
      </div>
    );
  }

  return (
    <div className="previous-workouts-container">
      <p className="previous-workouts-message">Previous workouts</p>
      {prevWorkouts.map((prev) => {
        return (
          <div className="previous-workout-container" key={prev.id}>
            <div className="previous-workout-nd-container">
              <p className="previous-workout-date">
                {createDate(prev.updatedAt)}
              </p>
              <p className="previous-workout-name">{prev.name}</p>
            </div>
            <div className="previous-workout-headings">
              <p className="previous-workout-heading previous-workout-heading-exercise">
                Exercise
              </p>
              <p className="previous-workout-heading previous-workout-heading-weight">
                Total Weight
              </p>
            </div>
            <div className="previous-workout-content">
              {prev.exercises.map((exercise) => {
                return (
                  <div className="previous-exercise-content" key={exercise.id}>
                    <p className="previous-exercise-name">{exercise.name}</p>
                    <p className="previous-exercise-weight">
                      {exercise.workoutlist.sets.reduce((acc, curr) => {
                        return (acc += parseInt(curr.reps * curr.weight));
                      }, 0)}{" "}
                      lbs
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="previous-workout-total-weight">
              Workout Total: {prev.workoutTotalWeight} lbs
            </p>
          </div>
        );
      })}
    </div>
  );
}
