import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "../store/singleUser";
import { Link } from "react-router-dom";
import { logout } from "../store";

const UserProfile = () => {
  const character = [
    "/sprites/zombie/zombie-idle.gif",
    "/sprites/zombie/zombie-jump.gif",
    "/sprites/zombie/zombie-run.gif",
    "/sprites/zombie/zombie-dead.gif",
  ];

  const [frame, setFrame] = useState(0);
  let [counter, setCounter] = useState(1);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.singleUser);
  const username = useSelector((state) => state.auth.username);

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, [dispatch]);

  // change character animation on click
  const counterFunc = () => {
    setFrame(counter);
    setCounter(counter + 1);
    if (counter >= 3) {
      setCounter(0);
    }
  };

  const totalWeight = user.totalWeight || [];

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
        <p className="character-margin">
          {totalWeight.toLocaleString("en-US") || 0} lbs
        </p>
        <button className="progress-btn">See my progress graph</button>
        <Link to="/login">
          <button className="logout-btn" onClick={() => dispatch(logout())}>
            Logout
          </button>
        </Link>
      </div>
    </>
  );
};

export default UserProfile;
