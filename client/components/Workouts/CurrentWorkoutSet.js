import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { confirmSet } from "../../store/workoutlist";

const CurrentWorkoutSet = (props) => {
  const dispatch = useDispatch();

  let [setInfo, setSetInfo] = useState({
    reps: props.reps,
    weight: props.weight,
  });

  const handleChange = (event) => {
    event.preventDefault();
    setSetInfo({
      ...setInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleConfirmSet = (event) => {
    event.preventDefault();
    dispatch(
      confirmSet({
        ...setInfo,
        workoutId: props.workoutId,
        exerciseId: props.exerciseId,
        setId: props.setId - 1,
      })
    );
  };
  return (
    <div className="cw-info-container">
      <form>
        <div className="cw-set-info">
          <input
            className="cw-sr-input cw-set"
            type="number"
            name="set"
            value={props.setId}
            disabled
          />

          <input
            className="cw-sr-input cw-rep-input"
            type="number"
            min="0"
            name="reps"
            value={setInfo.reps}
            onChange={handleChange}
          />

          <input
            className="cw-weight-input"
            type="number"
            min="0"
            name="weight"
            value={setInfo.weight}
            onChange={handleChange}
          />

          <p className="cw-pushed">
            {props.reps} x {props.weight}
          </p>

          <button
            className="cw-check-input"
            type="submit"
            onClick={handleConfirmSet}
          >
            ✓
          </button>
        </div>
      </form>
    </div>
  );
};

export default CurrentWorkoutSet;
