import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSet,
  fetchWorkoutlist,
  deleteFromWorkout,
  deleteSet,
} from "../../store/workoutlist";
import {
  fetchWorkout,
  finishWorkout,
  updateWorkoutName,
} from "../../store/workout";
import CurrentWorkoutSet from "./CurrentWorkoutSet";
import { Link } from "react-router-dom";
import LoadingAddWorkout from "../LoadingAddWorkout";
import Timer from "../Timer/Timer";

const CurrentWorkout = () => {
  const dispatch = useDispatch();
  const workoutlist = useSelector((state) => state.workoutlist);
  const workout = useSelector((state) => state.workout);

  const [openModal, setOpenModal] = useState(false);
  const [workoutName, setWorkoutName] = useState({
    name: "",
  });

  useEffect(() => {
    dispatch(fetchWorkout());
    dispatch(fetchWorkoutlist());
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setWorkoutName({ [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateWorkoutName(workoutName));
    setWorkoutName({
      name: "",
    });
  };

  if (
    !workoutlist.allExercises ||
    !workoutlist.allExercises.exercises ||
    workoutlist.allExercises.exercises.length === 0
  ) {
    return (
      <div>
        <LoadingAddWorkout />
      </div>
    );
  }

  const { exercises, allExercises } = workoutlist || [];
  const { id: workoutId } = allExercises;

  return (
    <div className="cw-container">
      <div className="cw-exercise-container">
        {!openModal && (
          <div className="timer-cw-container">
            <button
              className="timer-modal-btn"
              onClick={() => setOpenModal(true)}
            >
              <img src="/images/timer.png" className="timer-modal-img" />
            </button>
            <span className="timer-word"> Timer</span>
            </div>
        )}

        {openModal && <Timer closeModal={setOpenModal} />}
        <div className="cw-heading-container">
          <form onSubmit={handleSubmit}>
            <input
              className="cw-workout-name"
              placeholder={workout.name}
              type="text"
              name="name"
              onChange={handleChange}
            />
          </form>
          <button
            className="update-workout-name"
            type="submit"
            onClick={handleSubmit}
          >
            ✓
          </button>
        </div>
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
                <button
                  className="exercise-delete-btn"
                  onClick={() => dispatch(deleteFromWorkout(exercise.id))}
                >
                  <img
                    className="exercise-delete-btn-img"
                    src="/images/trash.png"
                  />
                </button>
              </div>
              <div className="cw-exercise">
                <div className="cw-headings">
                  <p className="cw-heading">Set</p>
                  <p className="cw-heading cw-reps-heading">Reps</p>
                  <p className="cw-heading cw-weight-heading">Weight</p>
                  <p className="cw-heading cw-pushed-heading">Total</p>
                  <p className="cw-heading cw-heading-check">Save</p>
                </div>
                <div className="cw-info-container-main">
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
                </div>

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
