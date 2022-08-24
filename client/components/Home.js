import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const Home = (props) => {
  const { username } = props;

  return (
    <div className="homepage-container">
      <h3 className="homepage-header">Welcome to Lift The World {username}</h3>

      <div className="homepage-btn-container">
        
        <div className="homepage-link-btn">
          <Link to="/musclegroups" className="homepage-btn-link">
            <button className="homepage-btn">See Muscle Groups</button>
          </Link>
        </div>

        <div className="homepage-link-btn">
          <Link to="/exercises" className="homepage-btn-link">
            <button className="homepage-btn">Select Exercises</button>
          </Link>
        </div>

        <div className="homepage-link-btn">
          <Link to="/workout/preset" className="homepage-btn-link">
            <button className="homepage-btn">Get a Pre-made Program</button>
          </Link>
        </div>

        <div className="homepage-link-btn">
          <Link to="/dontKnowWhatThisIsYet" className="homepage-btn-link">
            <button className="homepage-btn">View My Progress</button>
          </Link>
        </div>

        <div className="homepage-link-btn">
          <Link to="/dontKnowWhatThisIsYet" className="homepage-btn-link">
            <button className="homepage-btn">Chat With a Trainer</button>
          </Link>
        </div>
      </div>
      <img className="homepage-image" src="/images/cat1.png" />
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
