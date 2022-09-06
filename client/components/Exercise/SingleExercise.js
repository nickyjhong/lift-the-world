import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExercise } from "../../store/singleExercise";
import { addToWorkout } from "../../store/workout";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import YoutubeEmbed from "./YoutubeEmbed";

const SingleExercise = () => {
  let { id } = useParams();

  const exercise = useSelector((state) => state.singleExercise);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercise(id));
  }, [dispatch, id]);

  const handleAdd = (event) => {
    event.preventDefault();
    toast(`Added to workout`);
    dispatch(addToWorkout(exercise));
  };

  return (
    <div className="single-exercise-container">
      {exercise && exercise.id ? (
        <div className="single-exercise-info">
          <h1 className="single-exercise-name">{exercise.name}</h1>
          <YoutubeEmbed embedId={exercise.embedId} />
          <div className="single-exercise-box">
            <h2 className="single-exercise-headers">Equipment Needed:</h2>
            <ul className="single-exercise-equipment">
              {exercise.equipment.map((equipment) => {
                return (
                  <li
                    className="single-exercise-list-item"
                    key={exercise.equipment.indexOf(equipment)}
                  >
                    - {equipment}
                  </li>
                );
              })}
            </ul>
            <h2 className="single-exercise-headers">Tips:</h2>
            <ul className="single-exercise-tips">
              {exercise.tipsAndTricks.map((tip) => {
                return (
                  <li
                    className="single-exercise-tip"
                    key={exercise.tipsAndTricks.indexOf(tip)}
                  >
                    - {tip}
                  </li>
                );
              })}
            </ul>
          </div>
          <button className="single-exercise-button" onClick={handleAdd}>
            Add to workout
          </button>
        </div>
      ) : (
        <div>
          <p>No exercises found</p>
        </div>
      )}
    </div>
  );
};

export default SingleExercise;
