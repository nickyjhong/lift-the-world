import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const Home = (props) => {
  const { username } = props;

  return (
    <div className="homepage-container">
      <div>
        <h3>Welcome to Lift The World, {username}</h3>
      </div>
      <div>
        <Link to="/dontKnowWhatThisIsYet">
          <button className="homepage-btn">Select Workouts</button>
        </Link>
      </div>
      <div>
        <Link to="/dontKnowWhatThisIsYet">
          <button className="homepage-btn">Get a Pre-made Program</button>
        </Link>
      </div>
      <div>
        <Link to="/dontKnowWhatThisIsYet">
          <button className="homepage-btn">View My Progress</button>
        </Link>
      </div>
      <div>
        <Link to="/dontKnowWhatThisIsYet">
          <button className="homepage-btn">Chat With a Trainer</button>
        </Link>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
