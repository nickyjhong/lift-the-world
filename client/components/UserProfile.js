import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "../store/singleUser";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { fetchSelectedSprite } from "../store/fetchSelectedSprite";

const UserProfile = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, []);


  useEffect(()=>{
    dispatch(fetchSelectedSprite());
}, []);
 
  const [frame, setFrame] = useState(0);
  let [counter, setCounter] = useState(1);

  const user = useSelector((state) => state.singleUser);
  const username = useSelector((state) => state.auth.username);
  const spriteName = useSelector((state) =>  state.userSelectedSprite);
  console.log('SPRITE NAME', spriteName);

  const character = [
    `/sprites/${spriteName}/${spriteName}-idle.gif`,
    `/sprites/${spriteName}/${spriteName}-jump.gif`,
    `/sprites/${spriteName}/${spriteName}-run.gif`,
    `/sprites/${spriteName}/${spriteName}-dead.gif`,
  ] || [];

  
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
        <Link to='/sprites'><button className="progress-btn">View Unlocked Sprites</button></Link>
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
