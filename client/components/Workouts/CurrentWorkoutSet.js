import React, { Component } from "react";
import { connect } from "react-redux";
import { confirmSet } from "../../store/workoutlist";

class CurrentWorkoutSet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reps: props.reps,
      weight: props.weight,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleConfirmSet = this.handleConfirmSet.bind(this);
  }

  handleChange(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }

  handleConfirmSet(event) {
    event.preventDefault();
    this.props.confirmSet({
      ...this.state,
      workoutId: this.props.workoutId,
      exerciseId: this.props.exerciseId,
      setId: this.props.setId - 1,
    });
  }

  render() {
    const { handleChange, handleConfirmSet } = this;
    return (
      <div className="cw-info-container">
        <form>
          <div className="cw-set-info">
            <input
              className="cw-sr-input cw-set"
              type="number"
              name="set"
              value={this.props.setId}
              disabled
            />

            <p className="cw-previous">
              {this.props.reps} x {this.props.weight}
            </p>

            <input
              className="cw-sr-input cw-rep-input"
              type="number"
              min="0"
              name="reps"
              value={this.state.reps}
              onChange={handleChange}
            />

            <input
              className="cw-weight-input"
              type="number"
              min="0"
              name="weight"
              value={this.state.weight}
              onChange={handleChange}
            />

            <button
              className="cw-check-input"
              type="submit"
              onClick={handleConfirmSet}
            >
              {" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  confirmSet: (setData) => dispatch(confirmSet(setData)),
});

export default connect(null, mapDispatchToProps)(CurrentWorkoutSet);
