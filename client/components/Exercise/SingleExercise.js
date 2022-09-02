import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExercise } from "../../store/singleExercise";
import { addToWorkout } from "../../store/workout";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
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
    toast('Added to workout');
    dispatch(addToWorkout(exercise));
  };

  const notify = () => toast('Added to workout')

  return (
    <div>
      {exercise && exercise.id ? (
        <div>
          <h3>{exercise.name}</h3>
          <YoutubeEmbed embedId={exercise.embedId} />
          <h2>Equipment Needed:</h2>
          <ul>
            {exercise.equipment.map((equipment) => {
              return (
                <li key={exercise.equipment.indexOf(equipment)}>{equipment}</li>
              );
            })}
          </ul>
          <h2>Tips:</h2>
          <ul>
            {exercise.tipsAndTricks.map((tip) => {
              return <li key={exercise.tipsAndTricks.indexOf(tip)}>{tip}</li>;
            })}
          </ul>
          <button onClick={handleAdd}>add to workout</button>
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
