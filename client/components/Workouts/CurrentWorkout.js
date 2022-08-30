import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { addSet, confirmSet, fetchWorkoutlist } from "../../store/workoutlist";
import { finishWorkout } from "../../store/workout";
import CurrentWorkoutSet from "./CurrentWorkoutSet";
import { Link } from "react-router-dom";

function CurrentWorkout() {
  const dispatch = useDispatch();
  const workoutlist = useSelector((state) => state.workoutlist);
  function useForceUpdate() {
    const [value, setValue] = useState(0);
    console.log("value in force update", value);
    return () => setValue((value) => value + 1);
  }
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    dispatch(fetchWorkoutlist());
  }, [dispatch]);

  if (
    !workoutlist.allExercises.exercises ||
    workoutlist.allExercises.exercises.length === 0
  ) {
    setTimeout(() => {
      dispatch(fetchWorkoutlist());
    }, 10);
    return <div>Loading... please add a workout!</div>;
  }

  const { allExercises } = workoutlist || [];
  const { exercises, id: workoutId } = allExercises;
  console.log("HI THERE!");
  return (
    <div className="cw-container">
      <div className="cw-exercise-container">
        {allExercises.exercises.map((exercise) => {
          return (
            <div key={exercise.id}>
              <h2 className="cw-exercise-name">{exercise.name}</h2>
              <div className="cw-exercise">
                <div className="cw-headings">
                  <p className="cw-heading">Set</p>
                  <p className="cw-heading cw-previous-heading">Previous</p>
                  <p className="cw-heading">Reps</p>
                  <p className="cw-heading cw-weight-heading">Weight</p>
                  <p className="cw-heading cw-heading-check">️✔️️</p>
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
                      fetchWorkout={() => fetchWorkoutlist()}
                    />
                  );
                })}

                <div className="cw-btn-container">
                  <button
                    className="cw-add-btn"
                    onClick={() => {
                      dispatch(
                        addSet({
                          exerciseId: exercise.id,
                          reps: "0",
                          setId:
                            exercise.workoutlist.sets[
                              exercise.workoutlist.sets.length - 1
                            ].setId + 1,
                          weight: 0,
                          workoutId: workoutId,
                        })
                      );
                      forceUpdate();
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
      {workoutlist.status === "active" ? (
        <Link to="/recap">
          <button className="cw-finish-btn" onClick={() => finishWorkout()}>
            Finish Workout
          </button>
        </Link>
      ) : (
        <button>Start a new workout</button>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addSet: (setData) => dispatch(addSet(setData)),
  confirmSet: (setData) => dispatch(confirmSet(setData)),
  // fetchWorkout: () => dispatch(fetchWorkout()),
  fetchWorkoutlist: () => dispatch(fetchWorkoutlist()),
  // fetchAllWorkoutList: () => dispatch(fetchAllWorkoutlist()),
  finishWorkout: () => dispatch(finishWorkout()),
  // getCurrentWorkout: () => dispatch(fetchWorkouts()),
});

export default connect(null, mapDispatchToProps)(CurrentWorkout);
