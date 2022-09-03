import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchExerciseCategory } from "../../store/exercises";
import { addToWorkout } from "../../store/workout";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loading";

export default function ExerciseGroup(props) {
  let { category } = useParams();
  let catName = category.charAt(0).toUpperCase() + category.slice(1);
  const dispatch = useDispatch();

  const group = useSelector((state) => state.allExercises);

  useEffect(() => {
    dispatch(fetchExerciseCategory(category));
  }, [dispatch, category]);
  return (
    <div>
      {group ? (
        <div className="all-exercises-container">
          <h1 className="all-exercises-heading">{catName} Exercises</h1>
          <Link to="/exercises" className="all-exercises-link">
            See all exercises
          </Link>
          {group.map((exercise) => {
            return (
              <div className="exercise-container" key={exercise.id}>
                <div className="exercise-img-container">
                  <img src={exercise.image} className="exercise-img" />
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
}
