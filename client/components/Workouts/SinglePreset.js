import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchPresetWorkout } from "../../store/singleWorkout";
import { doPresetWorkout } from "../../store/workout";
import { toast } from "react-toastify";
import Loading from "../Loading";

const SinglePreset = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const preset = useSelector((state) => state.singleWorkout);

  useEffect(() => {
    dispatch(fetchPresetWorkout(id));
  }, [dispatch, id]);

  if (!preset || preset.length === 0) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="preset-workout-container">
      {preset && preset.id ? (
        <div className="preset-workout-info-container">
          <p className="preset-workout-name">{preset.name}</p>
          <div className="preset-exercise-container">
            <ul >
              {preset.exercises.map((exercise) => {
                return <li key={exercise.id} className="preset-exercise">{`3 sets x 8 reps `}
                  <Link to={`/exercise/${exercise.id}`}>
                    {exercise.name}
                  </Link>  
                </li>;
              })}
            </ul>
          </div>
          <button
            className="preset-start-workout-btn"
            onClick={() => {
              toast(`${[preset.name]} added to workout`);
              dispatch(doPresetWorkout(id));
            }}
          >
            Let's Go!
          </button>
          <img src="/images/cat3.png" className="cat-exercise" />
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default SinglePreset;
