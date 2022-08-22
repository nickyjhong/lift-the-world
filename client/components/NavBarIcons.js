import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const NavBarIcons = ({ handleClick, isLoggedIn }) => (
  <div className="nav-container">
    <nav>
      {isLoggedIn ? (
        <div className="nav-links">
          {/* The navbar will show these links after you log in */}
          <Link to="/">
            <img
              className="nav-icon"
              src="/images/house-icon.png"
              alt="Home Icon"
            />
          </Link>
          <img className="nav-icon" src="/images/workout-icon.jpg" />
          <img className="nav-icon" src="/images/plus-icon.png" />
          <img className="nav-icon" src="/images/crown-icon.png" />
          <img className="nav-icon" src="/images/profile-icon.png" />
          <Link to="/recap">Recap</Link>
        </div>
      ) : (
        <div className="nav-links">
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
  </div>
);

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(NavBarIcons);
