import React from "react";
import { connect } from "react-redux";
import NavIconLink from "./NavIconLink";

// component to be used when logged in
const NavBarIcons = ({ isLoggedIn }) => (
  <div className="nav-container">
    <nav>
      {isLoggedIn ? (
        <div className="nav-icon-links">
          <NavIconLink
            to="/"
            className="nav-icon"
            altSrc="/images/home-color.png"
            src="/images/home-black.png"
          />

          <NavIconLink
            to="/workout"
            className="nav-icon"
            altSrc="/images/weight-lifter-color.png"
            src="/images/weight-lifter-black.png"
          />

          <NavIconLink
            to="/exercises"
            className="nav-icon"
            altSrc="/images/plus-color.png"
            src="/images/plus-black.png"
          />
          <NavIconLink
            to="/leaderboard"
            className="nav-icon"
            altSrc="/images/crown-color.png"
            src="/images/crown-black.png"
          />

          <NavIconLink
            to="/profile"
            className="nav-icon"
            altSrc="/images/profile-color.png"
            src="/images/profile-black.png"
          />
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
