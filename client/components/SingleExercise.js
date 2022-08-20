import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExercise } from '../store/singleExercise';
import { addToWorkout } from '../store/workout';
import { Link } from 'react-router-dom';

class SingleExercise extends Component {
  constructor() {
    super();
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.props.getSingleExercise(this.props.match.params.id)
  }

  handleAdd() {
    this.props.addToWorkout(this.props.exercise)
  }

  render() {
    const { exercise } = this.props;
    console.log('props', this.props)
    console.log('exercise', exercise)
    return (
      <div>
        {exercise && exercise.id ? (
          <div>
            <h3>{exercise.name}</h3>
            <button onClick={() => this.handleAdd()}>
              add to workout
            </button>
          </div>
        ) : (
          <div>
            <p>No exercises found</p>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  exercise: state.singleExercise,
});

const mapDispatchToProps = (dispatch) => ({
  getSingleExercise: (id) => dispatch(fetchExercise(id)),
  addToWorkout: (exercise) => dispatch(addToWorkout(exercise)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleExercise);
