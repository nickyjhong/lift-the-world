import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Home = () => {
  const username = useSelector((state) => state.auth.username);

  return (
    <div className="homepage-container">
      <h3 className="homepage-header">Welcome, {username}</h3>

      <div className="homepage-link-btn">
        <Link to="/exercises" className="homepage-btn-link">
          <button className="homepage-btn">Select Exercises</button>
        </Link>
      </div>

      <div className="homepage-btn-container">
        <div className="homepage-link-btn">
          <Link to="/musclegroups" className="homepage-btn-link">
            <button className="homepage-btn">See Muscle Groups</button>
          </Link>
        </div>

        <div className="homepage-link-btn">
          <Link to="/workout/preset" className="homepage-btn-link">
            <button className="homepage-btn">Get a Pre-made Program</button>
          </Link>
        </div>

        <div className="homepage-link-btn">
          <Link to="/sprites" className="homepage-btn-link">
            <button className="homepage-btn">View Unlocked Characters</button>
          </Link>
        </div>
      </div>
      <img className="homepage-image" src="/images/cat1.png" />
    </div>
  );
};

export default Home;
