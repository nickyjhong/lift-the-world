import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { confirmSet } from "../../store/workoutlist";

const CurrentWorkoutSet = (props) => {
  const dispatch = useDispatch();

  let [setInfo, setSetInfo] = useState({
    reps: props.reps,
    weight: props.weight,
  });

  const [confirmed, setConfirmed] = useState(false)

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
    confirmed ? setConfirmed(false) : setConfirmed(true)
  };
  return (
    <div className={confirmed ? "cw-info-container-yes" : "cw-info-container-no"}>
      <form>
        <div className="cw-set-info">
          <input
            className={confirmed ? "cw-sr-input-yes" : "cw-sr-input-no"}
            type="number"
            name="set"
            value={props.setId}
            disabled
          />

          <input
            className={confirmed ? "cw-sr-input-yes" : "cw-sr-input-no"}
            type="number"
            min="0"
            name="reps"
            value={setInfo.reps}
            onChange={handleChange}
          />

          <input
            className={confirmed ? "cw-weight-input-yes" : "cw-weight-input-no"}
            type="number"
            min="0"
            name="weight"
            value={setInfo.weight}
            onChange={handleChange}
          />

          <p className="cw-total">
            {props.reps * props.weight} lbs
          </p>

          <button
            className={confirmed ? "cw-check-yes" : "cw-check-no"}
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
