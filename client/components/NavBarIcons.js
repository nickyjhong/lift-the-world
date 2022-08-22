import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const NavBarIcons = ({ handleClick, isLoggedIn }) => (
  <div className="nav-container">
    <nav>
      {isLoggedIn ? (
        <div className="nav-icon-links">
          {/* The navbar will show these links after you log in */}
          <Link to="/">
            <img className="nav-icon" src="/images/house-solid.svg" />
          </Link>
          <img className="nav-icon" src="/images/dumbbell-solid.svg" />
          <img className="nav-icon" src="/images/plus-solid.svg" />
          <img className="nav-icon" src="/images/crown-solid.svg" />
          <img className="nav-icon-profile" src="/images/user-solid.svg" />
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
