import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExercisesThunk } from "../../store/exercises";
import { addToWorkout } from "../../store/workout";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loading";

const AllExercises = () => {
  const exercises = useSelector((state) => state.allExercises);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExercisesThunk());
  }, [dispatch]);

  return (
    <div>
      {exercises ? (
        <div className="all-exercises-container">
          <h1 className="all-exercises-heading">All Exercises</h1>
          {exercises.map((exercise) => {
            return (
              <div className="exercise-container" key={exercise.id}>
                <div className="exercise-img-container">
                  <Link to={`/exercise/${exercise.id}`}>
                    <img src={exercise.image} className="exercise-img" />
                  </Link>
                </div>
                <div className="exercise-info-container">
                  <Link
                    to={`/exercise/${exercise.id}`}
                    className="exercise-name"
                  >
                    {exercise.name}
                  </Link>

                  <Link
                    to={`/musclegroups/${exercise.category}`}
                    className="exercise-category"
                  >
                    {exercise.category}
                  </Link>
                </div>
                <div className="exercise-btn-container">
                  <button
                    onClick={() => {
                      toast("Added to workout");
                      dispatch(addToWorkout(exercise));
                    }}
                    className="exercise-add-btn"
                  >
                    <img
                      src="/images/plus-solid.svg"
                      className="exercise-add-btn-img"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default AllExercises;
