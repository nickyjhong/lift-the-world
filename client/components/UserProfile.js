import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "../store/singleUser";
import { Link } from "react-router-dom";
import { logout } from "../store";

const UserProfile = ({ handleClick, username }) => {
  const character = [
    "/sprites/ninjaBoy/ninja-boy-idle.gif",
    "/sprites/ninjaBoy/ninja-boy-jump.gif",
    "/sprites/ninjaBoy/ninja-boy-run.gif",
    "/sprites/ninjaBoy/ninja-boy-dead.gif",
  ];

  const [frame, setFrame] = useState(0);
  let [counter, setCounter] = useState(1);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.singleUser);

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, [dispatch]);

  // change character animation on click
  const counterFunc = () => {
    console.log(counter);
    setFrame(counter);
    setCounter(counter + 1);
    if (counter >= 3) {
      setCounter(0);
    }
  };

  return (
    <>
      <div className="profile-container">
        <h1 className="character-margin">{username}</h1>
        <h3 className="character-margin">Level {user.level}</h3>
      </div>
      <div className="character-container">
        <img
          onClick={() => counterFunc()}
          src={character[frame]}
          className="character"
        />
        <p className="character-margin">Progress bar goes here</p>
        <p className="character-margin">You've lifted a total of:</p>
        <p className="character-margin">{user.totalWeight} lbs</p>
        <button className="progress-btn">See my progress graph</button>
        <Link to="/login">
          <button className="logout-btn" onClick={handleClick}>
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
