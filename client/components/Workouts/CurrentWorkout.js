import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSet,
  fetchWorkoutlist,
  deleteFromWorkout,
  deleteSet
} from "../../store/workoutlist";
import { fetchWorkout, finishWorkout } from "../../store/workout";
import CurrentWorkoutSet from "./CurrentWorkoutSet";
import { Link } from "react-router-dom";
import LoadingAddWorkout from "../LoadingAddWorkout";

const CurrentWorkout = () => {
  const dispatch = useDispatch();
  const workoutlist = useSelector((state) => state.workoutlist);
  const workout = useSelector((state) => state.workout);

  useEffect(() => {
    dispatch(fetchWorkout());
    dispatch(fetchWorkoutlist());
  }, [dispatch]);

  if (
    !workoutlist.allExercises || !workoutlist.allExercises.exercises ||
    workoutlist.allExercises.exercises.length === 0
  ) {
    return (
      <div>
        <LoadingAddWorkout />
      </div>
    );
  }

  const { allExercises } = workoutlist || [];
  const { exercises, id: workoutId } = allExercises;

  return (
    <div className="cw-container">
      <div className="cw-exercise-container">
        <h1 className="cw-workout-name">{workout.name}</h1>
        {allExercises.exercises.map((exercise) => {
          return (
            <div key={exercise.id} className="cw-single-exercise-container">
              <div className="cw-exercise-name-btn">
                <Link
                  to={`/exercise/${exercise.id}`}
                  className="cw-exercise-name"
                >
                  {exercise.name}
                </Link>
                <button className="exercise-delete-btn" onClick={() => dispatch(deleteFromWorkout(exercise.id))}>
                  <img className="exercise-delete-btn-img" src="/images/trash.png" />
                </button>
              </div>
              <div className="cw-exercise">
                <div className="cw-headings">
                  <p className="cw-heading">Set</p>
                  <p className="cw-heading cw-reps-heading">Reps</p>
                  <p className="cw-heading cw-weight-heading">Weight</p>
                  <p className="cw-heading cw-pushed-heading">Pushed</p>
                  <p className="cw-heading cw-heading-check">Done</p>
                </div>
                {exercise.workoutlist.sets.map((set, index) => {
                  return (
                    <CurrentWorkoutSet
                      key={index}
                      workoutId={workoutId}
                      exerciseId={exercise.id}
                      setId={index + 1}
                      weight={set.weight}
                      reps={set.reps}
                    />
                  );
                })}

                <div className="cw-btn-container">
                <button
                    className="cw-delete-btn"
                    onClick={() => dispatch(deleteSet(exercise.id))}
                  >
                    - Remove Set
                  </button>
                  <button
                    className="cw-add-btn"
                    onClick={() => {
                      dispatch(
                        addSet({
                          exerciseId: exercise.id,
                          reps: "",
                          setId:
                            exercise.workoutlist.sets[
                              exercise.workoutlist.sets.length - 1
                            ].setId + 1,
                          weight: "",
                          workoutId: workoutId,
                        })
                      );
                    }}
                  >
                    + Add Set
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cw-finish-workout-btn">
        <Link to="/recap">
          <button
            className="cw-finish-btn"
            onClick={() => dispatch(finishWorkout())}
          >
            Finish Workout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CurrentWorkout;
