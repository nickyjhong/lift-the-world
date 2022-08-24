import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// component to be used when logged in
const NavBarIcons = ({ isLoggedIn }) => (
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
          </Link>

          <Link to="/exercises">
            <img className="nav-icon" src="/images/dumbbell-solid.svg" />
          </Link>

          <Link to="/workout">
            <img className="nav-icon" src="/images/plus-solid.svg" />
          </Link>

          <Link to="/leaderboard">
            <img className="nav-icon" src="/images/crown-solid.svg" />
          </Link>

          <Link to="/profile">
            <img className="nav-icon-profile" src="/images/user-solid.svg" />
          </Link>
        </div>
      ) : (
        ""
      )}
    </nav>
  </div>
);

const mapStateToProps = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

export default connect(mapStateToProps)(NavBarIcons);
