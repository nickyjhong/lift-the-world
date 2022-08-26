import React, { Component } from "react";
import { connect } from "react-redux";
import { confirmSet } from "../../store/workoutlist";
import { fetchWorkout } from "../../store/workout";
import { fetchWorkoutlist } from "../../store/workoutlist";
import CurrentWorkoutSet from "./CurrentWorkoutSet";
class CurrentWorkout extends Component {
  componentDidMount() {
    this.props.fetchWorkout();
  }

  render() {
    if (
      !this.props.workout.exercises ||
      this.props.workout.exercises.length === 0
    ) {
      return <div>Loading... please add a workout!</div>;
    }

    console.log("props here", this.props);
    const { exercises, id: workoutId } = this.props.workout;

    return (
      <div className="cw-container">
        {/* <h2 className="cw-workout-name">{workout.name}</h2> */}
        <div className="cw-exercise-container">
          {exercises.map((exercise) => {
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
                      <CurrentWorkoutSet
                        key={index}
                        workoutId={workoutId}
                        exerciseId={exercise.id}
                        setId={index + 1}
                        weight={set.weight}
                        reps={set.reps}
                      />
                    );
                  })}

                  <div className="cw-btn-container">
                    <button className="cw-add-btn">+ Add Set</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* this should lead to recap page and make workout closed */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  workout: state.workout,
  exercise: state.workoutlist,
});

const mapDispatchToProps = (dispatch) => ({
  confirmSet: (setData) => dispatch(confirmSet(setData)),
  fetchWorkout: () => dispatch(fetchWorkout()),
  fetchWorkoutlist: (id) => dispatch(fetchWorkoutlist(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWorkout);
