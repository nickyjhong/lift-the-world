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
    console.log('workoutlist', this.props.workoutlist);
    // if (
    //   !this.props.workoutlist.allExercises ||
    //   this.props.workoutlist.allExercises.length === 0
    // ) {
    //   return <div>Loading... please add a workout!</div>;
    // }

    // const { exercises, id: workoutId } = this.props.workout;
    // const { allExercises } = this.props.workoutlist;
    // console.log("workout list props", allExercises);
    // console.log("workout  props", this.props.workout);

    return <div>Hi</div>;
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
