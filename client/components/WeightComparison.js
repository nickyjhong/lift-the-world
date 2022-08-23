import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWorkout } from "../store/workout";
import { weightFunction } from "./WeightFunction";

export class WeightComparison extends Component {
  componentDidMount() {
    this.props.weightsCompared();
  }

  render() {
    const exercises = this.props.weightsComparison.exercises || [];

    const totalWeight = exercises.map((exercise) => {
      return exercise.workoutlist.sets.reduce((accum, curr) => {
        let totalWeight = curr.reps * curr.weight;
        return accum + totalWeight;
      }, 0);
    })[0];

    const comparison = weightFunction(totalWeight)
  
    console.log(comparison)
    return (
      <div>
        <div className="recap-total-weight">
          <p>You lifted {totalWeight} pounds during this workout!</p>
          <p>That's the weight of {comparison.name}</p>
          <img src={comparison.image}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weightsComparison: state.workout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    weightsCompared: () => {
      dispatch(fetchWorkout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeightComparison);
