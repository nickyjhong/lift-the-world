import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { addSet, confirmSet, fetchWorkoutlist } from "../../store/workoutlist";
import { finishWorkout } from "../../store/workout";
import CurrentWorkoutSet from "./CurrentWorkoutSet";
import { Link } from "react-router-dom";

function CurrentWorkout() {
  const dispatch = useDispatch();
  const workoutlist = useSelector((state) => state.workoutlist);

  useEffect(() => {
    dispatch(fetchWorkoutlist());
  }, [dispatch]);

  if (
    !workoutlist.allExercises.exercises ||
    workoutlist.allExercises.exercises.length === 0
  ) {
    return <div>Loading... please add a workout!</div>;
  }

  const { allExercises } = workoutlist || [];
  const { exercises, id: workoutId } = allExercises;
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
      {allExercises.status === "active" ? (
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
  fetchWorkoutlist: () => dispatch(fetchWorkoutlist()),
  finishWorkout: () => dispatch(finishWorkout()),
});

export default connect(null, mapDispatchToProps)(CurrentWorkout);
