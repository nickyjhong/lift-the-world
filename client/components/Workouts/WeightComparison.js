import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorkout } from "../../store/workout";
import { weightFunction } from "./WeightFunction";

const WeightComparison = () => {
  const weightsComparison = useSelector((state) => state.workout);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorkout());
  }, [dispatch]);

  const exercises = weightsComparison.exercises || [];

  const totalWeight = exercises.map((exercise) => {
    return exercise.workoutlist.sets.reduce((accum, curr) => {
      let totalWeight = curr.reps * curr.weight;
      return accum + totalWeight;
    }, 0);
  })[0];

  const comparison = weightFunction(totalWeight);
  return (
    <div>
      <div className="recap-total-weight">
        <p>You lifted {totalWeight} pounds during this workout!</p>
        <p>That's the weight of {comparison.name}</p>
        <img className="comparison-image" src={comparison.image} />
      </div>
    </div>
  );
};

export default WeightComparison;
