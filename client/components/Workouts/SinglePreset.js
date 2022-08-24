import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPresetWorkout } from "../../store/singleWorkout";

const SinglePreset = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const preset = useSelector((state) => state.singleWorkout);

  useEffect(() => {
    dispatch(fetchPresetWorkout(id));
  }, [dispatch, id]);

  return (
    <div>
      {preset && preset.id ? (
        <div>
          <p>{preset.name}</p>
          <ul>
            {preset.exercises.map((exercise) => {
              return (
                <li 
                  key={exercise.id}
                >
                  {exercise.name}
                </li>
              )
            })}
          </ul>
        </div>
      ) : (
        <p> No preset workout here!</p>
      )}
    </div>
  );
};

export default SinglePreset;
