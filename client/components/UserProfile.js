import React from "react";
import { connect } from "react-redux";

const UserProfile = () => {
  const { username } = props;
  console.log(props);
  return (
    <div>
      <h1>{username}</h1>
      <h3>Level {}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    user: state.allUsers,
  };
};

export default connect(mapStateToProps)(UserProfile);
