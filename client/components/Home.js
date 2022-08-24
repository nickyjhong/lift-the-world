import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const Home = (props) => {
  const { username } = props;

  return (
    <div className="homepage-container">
      <h3 className="homepage-header">Welcome to Lift The World {username}</h3>

      <div className="homepage-btn-container">
        <button className="homepage-btn">
          <Link to="/musclegroups" className="homepage-btn-link">
            See Muscle Groups
          </Link>
        </button>

        <button className="homepage-btn">
          <Link to="/dontKnowWhatThisIsYet" className="homepage-btn-link">
            Select Exercises
          </Link>
        </button>

        <button className="homepage-btn">
          <Link to="/dontKnowWhatThisIsYet" className="homepage-btn-link">
            Get a Pre-made Program
          </Link>
        </button>

        <button className="homepage-btn">
          <Link to="/dontKnowWhatThisIsYet" className="homepage-btn-link">
            View My Progress
          </Link>
        </button>

        <button className="homepage-btn">
          <Link to="/dontKnowWhatThisIsYet" className="homepage-btn-link">
            Chat With a Trainer
          </Link>
        </button>
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
