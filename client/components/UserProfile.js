import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchUsers } from "../store/allUsers";
import { Link } from "react-router-dom";
import { logout } from "../store";

const UserProfile = ({ handleClick, username }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className="profile-container">
        <h1>{username}</h1>
        <h3>Level {}</h3>
      </div>
      <div className="character-container">
        <img className="character" src="/images/cat4.png" />
        <p>Progress bar goes here</p>
        {/* will discuss experience points with team on leveling up */}
        <button className="homepage-btn">See my progress graph</button>
        <Link to="/login">
          <button className="homepage-btn" onClick={handleClick}>
            Logout
          </button>
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  username: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick() {
    dispatch(logout());
  },
  allUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
