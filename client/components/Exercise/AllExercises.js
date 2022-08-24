import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExercisesThunk } from "../../store/exercises";
import { addToWorkout } from "../../store/workout";
import { useParams } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";

const AllExercises = () => {
  const exercises = useSelector((state) => state.allExercises);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExercisesThunk());
  }, [dispatch]);

  return (
    <div>
      {exercises ? (
        <div>
          <ul>
            {exercises.map((exercise) => {
              return (
                <li key={exercise.id}>
                  {exercise.name}
                  <button onClick={() => dispatch(addToWorkout(exercise))}>add to workout</button>
                </li>
                
              );
            })}
          </ul>
        </div>
      ) : (
        <div>
          <p>No exercises found</p>
        </div>
      )}
    </div>
  );
};

export default AllExercises;
