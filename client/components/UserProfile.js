import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "../store/singleUser";
import { Link } from "react-router-dom";
import { logout } from "../store";

const UserProfile = ({ handleClick, username }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.singleUser);

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, [dispatch]);

  return (
    <>
      <div className="profile-container">
        <h1>{username}</h1>
        <h3>Level {user.level}</h3>
      </div>
      <div className="character-container">
        <img className="character" src="/images/cat4.png" />
        <p>Progress bar goes here</p>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
