import React, { Component } from "react";
import { connect } from "react-redux";
import { addSet, confirmSet, fetchWorkoutlist } from "../../store/workoutlist2";
import { finishWorkout } from "../../store/workout";
// import { fetchWorkoutlist, fetchWorkouts } from "../../store/workoutlist";
import CurrentWorkoutSet from "./CurrentWorkoutSet";
import { Link } from "react-router-dom";

class CurrentWorkout extends Component {
  componentDidMount() {
    //TODO: fetch current workout
    this.props.fetchWorkoutlist();
  }

  render() {
    console.log("workoutlist", this.props.workoutlist);
    console.log(
      "workoutlist allExercises props here",
      this.props.workoutlist.allExercises
    );
    if (
      !this.props.workoutlist.allExercises.exercises ||
      this.props.workoutlist.allExercises.exercises.length === 0
    ) {
      return <div>Loading... please add a workout!</div>;
    }

    const { allExercises } = this.props.workoutlist || [];
    // console.log("workout list props", allExercises);
    // console.log("workout  props", this.props.workout);
    const { exercises, id: workoutId } = allExercises;
    return (
      <div className="cw-container">
        <div className="cw-exercise-container">
          {allExercises.exercises.map((exerciseListFromAll) => {
            return (
              <div key={exerciseListFromAll.id}>
                <h2 className="cw-exercise-name">{exerciseListFromAll.name}</h2>
                <div className="cw-exercise">
                  <div className="cw-headings">
                    <p className="cw-heading">Set</p>
                    <p className="cw-heading cw-previous-heading">Previous</p>
                    <p className="cw-heading">Reps</p>
                    <p className="cw-heading cw-weight-heading">Weight</p>
                    <p className="cw-heading cw-heading-check">️✔️️</p>
                  </div>
                  {exerciseListFromAll.workoutlist.sets.map((set, index) => {
                    return (
                      <CurrentWorkoutSet
                        key={index}
                        workoutId={workoutId}
                        exerciseId={exerciseListFromAll.id}
                        setId={index + 1}
                        weight={set.weight}
                        reps={set.reps}
                      />
                    );
                  })}

                  <div className="cw-btn-container">
                    <button
                      className="cw-add-btn"
                      onClick={() =>
                        this.props.addSet({
                          exerciseId: exerciseListFromAll.id,
                          reps: "0",
                          setId:
                            exerciseListFromAll.workoutlist.sets[
                              exerciseListFromAll.workoutlist.sets.length - 1
                            ].setId + 1,
                          weight: 0,
                          workoutId: workoutId,
                        })
                      }
                    >
                      + Add Set
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {this.props.workoutlist.status === "active" ? (
          <Link to="/recap">
            <button
              className="cw-finish-btn"
              onClick={() => this.props.finishWorkout()}
            >
              Finish Workout
            </button>
          </Link>
        ) : (
          <button>Start a new workout</button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // workout: state.workout,
  workoutlist: state.workoutlist2,
});

const mapDispatchToProps = (dispatch) => ({
  addSet: (setData) => dispatch(addSet(setData)),
  confirmSet: (setData) => dispatch(confirmSet(setData)),
  // fetchWorkout: () => dispatch(fetchWorkout()),
  fetchWorkoutlist: () => dispatch(fetchWorkoutlist()),
  // fetchAllWorkoutList: () => dispatch(fetchAllWorkoutlist()),
  finishWorkout: () => dispatch(finishWorkout()),
  // getCurrentWorkout: () => dispatch(fetchWorkouts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWorkout);
