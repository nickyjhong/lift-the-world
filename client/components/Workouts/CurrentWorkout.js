// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchWorkout } from '../../store/workout'

// export default function CurrentWorkout() {
//   return (
//     <div className="cw-container">
//       <h2 className="cw-workout-name">Workout Name</h2>
      {/* map each exercise below to replace hard coded stuff */}
      {/* <div className="cw-exercise-container"> */}
        {/* <h3 className="cw-exercise-name">Exercise Name</h3>
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
                  onChange={handleChange}
                />

                <p className="cw-previous">rep x weight</p> */}
                
                {/* <input
                  className="cw-sr-input"
                  type="number"
                  name="rep"
                  onChange={handleChange}
                /> */}

                {/* <input
                  className="cw-weight-input"
                  type="number"
                  name="weight"
                  onChange={handleChange}
                /> */}

                {/* change into a checkbox */}
                {/* <input
                  className="cw-check-input"
                  type="text"
                  name="check"
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          <div className="cw-btn-container">
            <button className="cw-add-btn">
              + Add Set
            </button>
          </div>
        </div> */}
        
      // </div>
        {/* this should lead to recap page and make workout closed */}
      {/* <button className="cw-finish-btn">
        Finish Workout
      </button> */}
//     </div>
//   )
// }

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorkout } from '../../store/workout'

const CurrentWorkout = () => {

  const workout = useSelector((state) => state.workout);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorkout());
  }, [dispatch])

  const workouts = workout.exercises || []
  
  console.log(workouts)
  return (
    <div>
      {workouts.map((exercise) => {
        return (
          <div key={exercise.id}>
            {exercise.workoutlist.sets.map((set, index) => {
              return (
                <div key={index}>
                  <h1>id: {index + 1}</h1>
                  <h1>reps: {set.reps}</h1>
                  <h1>weight: {set.weight}</h1>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default CurrentWorkout