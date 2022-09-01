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
      <h1 className="lb-heading">Leaderboard:</h1>
      <div>
        {topTen.map((user) => {
          return (
            <div key={user.id} className="lb-info-container">
              <h3 className="lb-name lb-info">{user.username}</h3>
              <h3 className="lb-weight lb-info">{user.totalWeight.toLocaleString("en-US")}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderBoard;
