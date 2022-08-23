import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

// component to be used when logged in
const NavBarIcons = ({ handleClick, isLoggedIn }) => (
  <div className="nav-container">
    <nav>
      {isLoggedIn ? (
        <div className="nav-icon-links">
          {/* The navbar will show these links after you log in */}
          <Link to="/">
            <img className="nav-icon" src="/images/house-solid.svg" />
          </Link>
          <Link to="/recap">
            Recap
            <img className="nav-icon" src="/images/dumbbell-solid.svg" />
          </Link>
          <img className="nav-icon" src="/images/plus-solid.svg" />
          <Link to="/leaderboard">
            <img className="nav-icon" src="/images/crown-solid.svg" />
          </Link>
          <a href="/" onClick={handleClick}>
            Logout
            <img className="nav-icon-profile" src="/images/user-solid.svg" />
          </a>
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
