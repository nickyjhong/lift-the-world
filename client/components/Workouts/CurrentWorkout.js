import React, { Component } from "react";
import { connect } from "react-redux";
import { addSet } from "../../store/workoutlist";
import { fetchWorkout } from "../../store/workout";
class CurrentWorkout extends Component {
  constructor() {
    super();

    this.state = {
      reps: null,
      weight: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
    console.log(this.state);
  }

  componentDidMount() {
    this.props.fetchWorkout();
    // this.props.fetchWorkoutlist(id);
  }

  render() {
    console.log("props here", this.props);
    const workout = this.props.workout.exercises || [];
    // const workoutlist = this.props.workoutlist;
    console.log("workout props", workout[0]);
    // console.log("workoutlist props", workoutlist);
    const { handleChange } = this;
    return (
      <div className="cw-container">
        {/* <h2 className="cw-workout-name">{workout.name}</h2> */}
        <div className="cw-exercise-container">
          {/* {workout.map((exercise) => {
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

                            <p className="cw-previous">
                              {set.reps} x {set.weight}
                            </p>

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
                              onChange={handleChange}
                            />

                            <button
                              className="cw-check-input"
                              type="checkbox"
                              name="check"
                              // onClick={handleAdd}
                            >
                              {" "}
                            </button>
                          </div>
                        </form>
                      </div>
                    );
                  }
                  )}

                  <div className="cw-btn-container">
                    <button className="cw-add-btn">+ Add Set</button>
                  </div>
                </div>
              </div>
            );
          })} */}
        </div>
        {/* this should lead to recap page and make workout closed */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  workout: state.workout,
  workoutlist: state.workoutlist,
});

const mapDispatchToProps = (dispatch) => ({
  addToSet: (exercise) => dispatch(addSet(exercise)),
  fetchWorkout: () => dispatch(fetchWorkout()),
  fetchWorkoutlist: (id) => dispatch(fetchWorkoutlist(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWorkout);
