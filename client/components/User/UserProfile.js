import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "../../store/singleUser";
import { Link } from "react-router-dom";
import { logout } from "../../store";
import { fetchSelectedSprite } from "../../store/fetchSelectedSprite";
import ProgressBar from "./ProgressBar";
import { fetchUserStats } from "../../store/userStats";

const UserProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, []);

  useEffect(() => {
    dispatch(fetchSelectedSprite());
  }, []);

  useEffect(() => {
    dispatch(fetchUserStats());
  }, []);

  const [frame, setFrame] = useState(0);
  let [counter, setCounter] = useState(1);

  const user = useSelector((state) => state.singleUser);
  const username = useSelector((state) => state.auth.username);
  const spriteName = useSelector((state) => state.userSelectedSprite);
  const userStats = useSelector((state) => state.userStats);
  const { level, currentWeight } = userStats;
  const percentage = (lvl, cw) => {
    let range;
    if (lvl === 1 && cw === 0) {
      return 0;
    } else if (lvl === 1 && cw !== 0) {
      return Math.floor((cw / 1000) * 100);
    } else if (lvl === 2) {
      cw -= 1000;
      range = 2500 - 1000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 3) {
      range = 5000 - 2500;
      cw -= 2500;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 4) {
      range = 8000 - 5000;
      cw -= 5000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 5) {
      range = 12000 - 8000;
      cw -= 8000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 6) {
      range = 16000 - 12000;
      cw -= 12000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 7) {
      range = 20000 - 16000;
      cw -= 16000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 8) {
      range = 25000 - 20000;
      cw -= 20000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 9) {
      range = 30000 - 25000;
      cw -= 25000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 10) {
      range = 35000 - 30000;
      cw -= 30000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 11) {
      range = 40000 - 35000;
      cw -= 35000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 12) {
      range = 50000 - 40000;
      cw -= 40000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 13) {
      range = 60000 - 50000;
      cw -= 50000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 14) {
      range = 75000 - 60000;
      cw -= 60000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 15) {
      range = 100000 - 75000;
      cw -= 75000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 16) {
      range = 125000 - 100000;
      cw -= 100000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 17) {
      range = 150000 - 125000;
      cw -= 125000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 18) {
      range = 175000 - 150000;
      cw -= 150000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 19) {
      range = 200000 - 175000;
      cw -= 175000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 20) {
      range = 250000 - 200000;
      cw -= 200000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 21) {
      range = 300000 - 250000;
      cw -= 250000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 22) {
      range = 350000 - 300000;
      cw -= 300000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 23) {
      range = 400000 - 350000;
      cw -= 350000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 24) {
      range = 500000 - 400000;
      cw -= 400000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 25) {
      range = 600000 - 500000;
      cw -= 500000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 26) {
      range = 700000 - 600000;
      cw -= 600000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 27) {
      range = 800000 - 700000;
      cw -= 700000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 28) {
      range = 900000 - 800000;
      cw -= 800000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 29) {
      range = 1000000 - 900000;
      cw -= 900000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 30) {
      range = 1100000 - 1000000;
      cw -= 1000000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 31) {
      range = 1200000 - 1100000;
      cw -= 1100000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 32) {
      range = 1300000 - 1200000;
      cw -= 1200000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 33) {
      range = 1400000 - 1300000;
      cw -= 1300000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 34) {
      range = 1500000 - 1400000;
      cw -= 1400000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 35) {
      range = 1600000 - 1500000;
      cw -= 1500000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 36) {
      range = 1700000 - 1600000;
      cw -= 1600000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 37) {
      range = 1800000 - 1700000;
      cw -= 1700000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 38) {
      range = 1900000 - 1800000;
      cw -= 1800000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 39) {
      range = 2000000 - 1900000;
      cw -= 1900000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 40) {
      range = 2100000 - 2000000;
      cw -= 2000000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 41) {
      range = 2200000 - 2100000;
      cw -= 2100000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 42) {
      range = 2300000 - 2200000;
      cw -= 2200000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 43) {
      range = 2400000 - 2300000;
      cw -= 2300000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 44) {
      range = 1000000;
      cw -= 2400000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 45) {
      range = 1000000;
      cw -= 2500000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 46) {
      range = 1000000;
      cw -= 2600000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 47) {
      range = 1000000;
      cw -= 2700000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 48) {
      range = 1000000;
      cw -= 2800000;
      return Math.floor((cw / range) * 100);
    } else if (lvl === 49) {
      range = 1000000;
      cw -= 2900000;
      return Math.floor((cw / range) * 100);
    }
  };

  const character =
    [
      `/sprites/${spriteName}/${spriteName}-idle.gif`,
      `/sprites/${spriteName}/${spriteName}-jump.gif`,
      `/sprites/${spriteName}/${spriteName}-run.gif`,
      `/sprites/${spriteName}/${spriteName}-dead.gif`,
    ] || [];

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
        <h1 className="profile-name">{username}</h1>
        <h3 className="profile-level">Level {user.level}</h3>
      </div>
      <div className="character-container">
        <img
          onClick={() => counterFunc()}
          src={character[frame]}
          className="character"
        />
        <h4 className="profile-level-progress">Level Progress:</h4>
        <ProgressBar percentage={percentage(level, currentWeight)} />
        <p className="profile-text">You've lifted a total of:</p>
        <p className="profile-weight">
          {totalWeight.toLocaleString("en-US") || 0} lbs
        </p>
        <div className="profile-btns-container">
          <Link to="/sprites">
            <button className="progress-btn">View Unlocked Characters</button>
          </Link>
          <Link to="/workout/previous">
            <button className="profile-previous-btn">
              View Previous Workouts
            </button>
          </Link>
          <Link to="/login">
            <button className="logout-btn" onClick={() => dispatch(logout())}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
