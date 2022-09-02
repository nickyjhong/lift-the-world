import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPresetWorkout } from "../../store/singleWorkout";
import { doPresetWorkout } from "../../store/workout";
import { Link } from "react-router-dom";
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
    <div>
      {preset && preset.id ? (
        <div>
          <p>{preset.name}</p>
          <ul>
            {preset.exercises.map((exercise) => {
              return <li key={exercise.id}>{exercise.name}</li>;
            })}
          </ul>
          <Link to="/workout">
            <button onClick={() => dispatch(doPresetWorkout(id))}>
              Let's Go!
            </button>
          </Link>
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
