import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPreviousWorkout } from '../../store/previous'
import { fetchWorkout } from "../../store/workout";
import { finishWorkout } from "../../store/workout";
import { Link } from "react-router-dom";

export default function CurrentWorkout() {
  const workout = useSelector((state) => state.workout);
  // const previous = useSelector((state) => state.previous)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPreviousWorkout())
  // }, [dispatch])

  useEffect(() => {
    dispatch(fetchWorkout())
  }, [dispatch])

  let [eset, setEset] = useState({
    reps: '',
    weight: ''
  })

  const handleChange = (event) => {
    event.preventDefault();
    setEset({
      ...eset,
      [event.target.name]: event.target.value
    })
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(createSet(set))
  //   setEset({
  //     reps:'',
  //     weight:''
  //   })
  // }

  const workouts = workout.exercises || []
  // const prev = previous.exercises || []
  // console.log(prev)
  return (
    <div className="cw-container">
      {/* <h2 className="cw-workout-name">{workout.name}</h2> */}
      <div className="cw-exercise-container">
        {workouts.map((exercise) => {
          return (
            <div key={exercise.id}>
            <h2 className="cw-exercise-name">{exercise.name}</h2>
            <div className="cw-exercise">
              <div className="cw-headings">
                <p className="cw-heading">Set</p>
                <p className="cw-heading cw-previous-heading">Previous</p>
                <p className="cw-heading">Reps</p>
                <p className="cw-heading cw-weight-heading">Weight</p>
                <p className="cw-heading cw-heading-check">️✔️️</p>
              </div>
              {exercise.workoutlist.sets.map((set, index) => {
                return (
                  <div className="cw-info-container" key={index}>
                    <form>
                      <div className="cw-set-info">
                        <input
                          className="cw-sr-input cw-set"
                          type="number"
                          name="set"
                          value={index + 1}
                          disabled
                        />                        
                        
                        <p className="cw-previous">{set.reps} x {set.weight}</p>
                        
                        <input
                          className="cw-sr-input cw-rep-input"
                          type="number"
                          name="reps"
                          onChange={handleChange}
                        /> 

                        <input
                          className="cw-weight-input"
                          type="number"
                          name="weight"
                          // onChange={handleChange}
                        />

                        <input
                          className="cw-check-input"
                          type="checkbox"
                          name="check"
                        />

                      </div>
                    </form>
                  </div>
                )
              })}
              
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
      {workout.status === 'active' ? (
        <Link to="/recap">
          <button className="cw-finish-btn" onClick={() => dispatch(finishWorkout())}>
            Finish Workout
          </button>
        </Link>

      ) : (
        <Link to="/exercises">
          <button>Start a new workout!</button>
        </Link>
      ) }

    </div>
  ) 
}