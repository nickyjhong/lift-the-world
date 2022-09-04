import axios from "axios";

const USER_STATS = "USER_STATS";

const userStats = (stats) => {
  return {
    type: USER_STATS,
    stats,
  };
};

export const fetchUserStats = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem("token");
      const { data: stats } = await axios.get("/api/users/stats", {
        headers: {
          authorization: token,
        },
      });
      dispatch(userStats(stats));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {};

export default function userStatsReducer(state = initialState, action) {
  switch (action.type) {
    case USER_STATS:
      return action.stats;
    default:
      return state;
  }
}
