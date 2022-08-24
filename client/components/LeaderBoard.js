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
    <div>
      <h1>LeaderBoard:</h1>
      <div>
        {topTen.map((user) => {
          return (
            <div key={user.id}>
              <h3 className="leaderHead">{user.username}</h3>
              <h3 className="leaderHead">{user.totalWeight}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeaderBoard;
