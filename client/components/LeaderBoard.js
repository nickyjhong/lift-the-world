import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLeadersThunk } from "../store/topUsers";

const LeaderBoard = () => {
  const topTen = useSelector((state) => state.topUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeadersThunk());
  }, []);

  return (
    <div className="lb-container">
      <img src="images/crown.png" className="leaderboard-crown" />
      <h1 className="lb-h1-heading">Leaderboard</h1>
      <div className="lb-table-headings">
        <p className="lb-single-heading lb-username-heading">Username</p>
        <p className="lb-single-heading lb-lifted-heading">Lifted</p>
      </div>
      <div>
        {topTen.map((user) => {
          return (
            <div key={user.id} className="lb-info-container">
              <p className="lb-name lb-info">{user.username}</p>
              <p className="lb-weight lb-info">
                {user.totalWeight.toLocaleString("en-US")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderBoard;
