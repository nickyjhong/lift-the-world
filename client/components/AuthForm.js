import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { authenticate } from '../store';

const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  return (
    <div className="form">
      <form onSubmit={handleSubmit} name={name}>
        <div className="login-container">
          <p className="login-title">Log In</p>

          <div className="form-container">
            <label className="form-label">username</label>
            <div className="form-input-container">
              <input
                className="form-input"
                type="username"
                name="username"
                placeholder="Username"
                required
              />
            </div>
          </div>

          <div className="form-container">
            <label className="form-label">password</label>
            <div className="form-input-container">
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="login-btn-container">
            <button className="button login-btn" type="submit">
              Sign In
            </button>
            <p className="form-small-text">Don't have an account?</p>
            <Link to="/signup">
              <button className="button signup-btn" type="submit">
                Create new account
              </button>
            </Link>

            <p className="form-disclaimer">Disclaimer</p>
          </div>

        </div>
      {error && <div> {error} </div>}
    </form>
  </div>
  );
};

const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',

    error: state.auth.error,
  };
};


const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
