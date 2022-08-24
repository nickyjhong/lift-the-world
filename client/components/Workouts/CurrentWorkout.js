import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorkout } from '../../store/workout'

export default function CurrentWorkout() {
  const workout = useSelector((state) => state.workout);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorkout());
  }, [dispatch])

  const workouts = workout.exercises || []
  console.log(workout)
  return (
    <div className="cw-container">
      {/* <h2 className="cw-workout-name">{workout.name}</h2> */}
      {/* map each exercise below to replace hard coded stuff */}
      <div className="cw-exercise-container">
        {workouts.map((workout) => {
          return (
            <div>
            <h2 className="cw-exercise-name">{workout.name}</h2>
            <div className="cw-exercise">
              <div className="cw-headings">
                <p className="cw-heading">Set</p>
                <p className="cw-heading">Previous</p>
                <p className="cw-heading">Reps</p>
                <p className="cw-heading">Weight</p>
                <p className="cw-heading">️✔️️</p>
              </div>
              <div className="cw-info-container">
                <form>
                  <div className="cw-set-info">
                    <input
                      className="cw-sr-input"
                      type="number"
                      name="set"

                    />

                    <p className="cw-previous">rep x weight</p>
                    
                    <input
                      className="cw-sr-input"
                      type="number"
                      name="rep"

                    /> 

                    <input
                      className="cw-weight-input"
                      type="number"
                      name="weight"
    
                    />

                    {/* change into a checkbox */}
                    <input
                      className="cw-check-input"
                      type="text"
                      name="check"

                    />
                  </div>
                </form>
              </div>
              <div className="cw-btn-container">
                <button className="cw-add-btn">
                  + Add Set
                </button>
              </div>
            </div>
          </div>
          )
        })}
      </div>
        {/* this should lead to recap page and make workout closed */}
      <button className="cw-finish-btn">
        Finish Workout
      </button>
    </div>
  ) 
}