import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import Recap from './components/Recap'
import SingleExercise from './components/SingleExercise';
import Disclaimer from './components/Disclaimer';
import { me } from './store';

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        <div className="header"></div>
        <div className="routes-container">
          {isLoggedIn ? (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/recap" component={Recap} />
              <Route path="/disclaimer" component={Disclaimer} />
              <Route path="/exercise/:id" component={SingleExercise} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/disclaimer" component={Disclaimer} />
              <Route path="/exercise/:id" component={SingleExercise} />
            </Switch>
          )}
        </div>
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
