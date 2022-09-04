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
              <div className="lb-name lb-info">
                <p>{user.username}</p>
              </div>
              <div className="lb-weight lb-info">
                <p>
                  {user.totalWeight.toLocaleString("en-US")}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderBoard;
