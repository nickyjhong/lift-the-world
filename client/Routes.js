import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/Authorization/AuthForm";
import Home from "./components/Home";
import Recap from "./components/Workouts/Recap";
import SingleExercise from "./components/Exercise/SingleExercise";
import Disclaimer from "./components/Authorization/Disclaimer";
import { me } from "./store";
import LeaderBoard from "./components/LeaderBoard";
import CurrentWorkout from "./components/Workouts/CurrentWorkout";
import PresetWorkouts from "./components/Workouts/PresetWorkouts";
import UserProfile from "./components/UserProfile";
import MuscleGroups from "./components/MuscleGroups/MuscleGroups";
import ExerciseGroup from "./components/MuscleGroups/ExerciseGroup";
import SinglePreset from "./components/Workouts/SinglePreset";
import AllExercises from "./components/Exercise/AllExercises";
import ChooseSprites from "./components/Sprites";

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <>
            <div className="header"></div>
            <div className="routes-container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/recap" component={Recap} />
                <Route path="/disclaimer" component={Disclaimer} />
                <Route exact path="/musclegroups" component={MuscleGroups} />
                <Route
                  exact
                  path="/musclegroups/:category"
                  component={ExerciseGroup}
                />
                <Route exact path="/workout" component={CurrentWorkout} />
                <Route
                  exact
                  path="/workout/preset"
                  component={PresetWorkouts}
                />
                <Route
                  exact
                  path="/workout/preset/:id"
                  component={SinglePreset}
                />
                <Route exact path="/exercises" component={AllExercises} />
                <Route exact path="/exercise/:id" component={SingleExercise} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/profile" component={UserProfile} />
                <Route path="/sprites" component={ChooseSprites} />
              </Switch>
            </div>
          </>
        ) : (
          <>
            <div className="header-not-signed-in">
              <div className="header-logo-container">
                <img className="header-logo" src="/images/splash-icon.png" />
              </div>
              <div className="routes-container-nlg">
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/disclaimer" component={Disclaimer} />
                </Switch>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Routes));
