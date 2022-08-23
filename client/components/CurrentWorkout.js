import React from 'react'

export default function CurrentWorkout() {
  return (
    <div className="cw-container">
      <h2>Workout Name</h2>
      {/* map each exercise below to replace hard coded stuff */}
      <div className="cw-exercise-container">
        <h3>Exercise Name</h3>
        <div className="cw-exercise">
          <div className="cw-headings">
            <p className="cw-heading">Set</p>
            <p className="cw-heading">Previous</p>
            <p className="cw-heading">Reps</p>
            <p className="cw-heading">Weight</p>
            <p className="cw-heading">️✔️️</p>
          </div>
          <div className="cw-info-container">
            <p>Hello</p>
          </div>
        </div>
      </div>
    </div>
  )
}
